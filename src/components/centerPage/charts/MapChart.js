import React, {PureComponent} from 'react';
import echarts from 'echarts'; // 导入 Echarts 库
import {mapOptions} from './options';

// 导入处理函数
import {EXISTING_SECOND_LAYER_REGION, EXISTING_THIRD_LAYER_REGION, getGeoJson, TAIWAN_ADCODE} from './cityData';
import chinaProvincialData from './cityData';

class MapChart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            renderer: 'canvas',
            selectedProvince: null, // 用于存储当前选中的省份名称
            cityMapData: null, // 用于存储市级地图数据
            initialized: false, // 用于标识地图实例是否已初始化
            seriesName: '',
            seriesProvincialName: '',
        };
        this.chartInstance = null; // 存储地图实例的引用
    }

    async componentDidMount() {
        // 组件加载后调用绘制图表的方法
        this.renderChart();
    }

    componentDidUpdate(prevProps, prevState) {
        // 如果组件接收到新的数据或选中的省份发生变化，更新图表
        if (
            prevProps.mapData !== this.props.mapData ||
            prevState.selectedProvince !== this.state.selectedProvince
        ) {
            // 在组件更新时销毁旧的地图实例
            this.disposeChart();
            // 重新渲染新的地图实例
            this.renderChart();
        }
    }

    componentWillUnmount() {
        // 组件卸载时清除点击事件监听器，以防止内存泄漏
        this.disposeChart();
    }

    // 销毁地图实例的方法
    disposeChart() {
        if (this.chartInstance) {
            this.chartInstance.dispose();
            this.chartInstance = null;
        }
    }

    // 点击地图的事件处理函数
    handleMapClick = async (params) => {
        console.log(params);
        // 获取点击位置的名称（名称）
        const {name} = params;
        // const {
        //     seriesName,
        //     name,
        //     // data: { adcode },
        // } = params
        // 如果没有名称信息，说明点击的不是省份区域，直接返回
        if (!name) return;

        console.log('点击了:', name);
        let adcode = 0;
        //遍历省级行政
        for (let i in chinaProvincialData.chinaProvincialData.features) {
            if (chinaProvincialData.chinaProvincialData.features[i].properties.name === name) {
                console.log(chinaProvincialData.chinaProvincialData.features[i].properties);
                adcode = chinaProvincialData.chinaProvincialData.features[i].properties.adcode;
                let seriesProvincialName = adcode + '-' + name
                this.setState({
                    seriesProvincialName: seriesProvincialName,
                });
            }
        }
        //点击的不是省级行政而是市级行政
        if (adcode === 0) {
            let cityMapDataFeatures = this.state.cityMapData.features
            for (let i in cityMapDataFeatures) {
                if (cityMapDataFeatures[i].properties.name === name) {
                    let adcode = cityMapDataFeatures[i].properties.adcode;
                    let seriesName = this.state.seriesProvincialName + '-' + adcode + '-' + name
                    this.setState({
                        seriesName: seriesName,
                    });
                }
            }
        }
        console.log('seriesProvincialName:', this.state.seriesProvincialName, '\nseriesName:', this.state.seriesName);
        try {
            // 使用 getGeoJson 函数发起 HTTP 请求来获取数据文件内容

            // 可下钻到二级地图（23个省、5个自治区、4个直辖市、2个特别行政区）
            if (EXISTING_SECOND_LAYER_REGION.find((i) => i.adcode === adcode)) {
                const mapName = `${adcode}-${name}`;
                const res = await getGeoJson('province', mapName);
                console.log(res.data);
                // 更新选中的省份状态和市级地图数据，触发重新渲染
                this.setState({
                    selectedProvince: name,
                    cityMapData: res.data, // 返回的是市级地图的 GeoJSON 数据
                });
            }  // 可下钻到三级地图（23个省、5个自治区 的市级区域）
            else if (EXISTING_THIRD_LAYER_REGION.find(i => `${i.adcode}-${i.name}` === this.state.seriesProvincialName)) {
                // 台湾，无法下钻（暂无市级区域geojson数据）
                if (this.state.seriesProvincialName.includes(TAIWAN_ADCODE)) return
                const mapName = this.state.seriesName
                console.log(mapName)
                const res = await getGeoJson('city', mapName)
                console.log(res.data);
                // 更新选中的省份状态和市级地图数据，触发重新渲染
                this.setState({
                    selectedProvince: name,
                    cityMapData: res.data,
                    seriesProvincialName: '',
                    seriesName: '',
                });
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // 在回退按钮的点击事件处理函数中
     handleBackButtonClick = () => {
        console.log('点击了回退按钮');
        alert('点击了回退按钮');
    };

    renderChart() {
        const {mapData} = this.props;
        const {selectedProvince, cityMapData} = this.state;
        const chartDom = document.getElementById(`mapContainer_${this.props.id}`);
        const myChart = echarts.init(chartDom);

        let option;

        if (selectedProvince && cityMapData) {
            myChart.clear(); // 清除图表

            // 下级地图渲染，使用 cityMapData 和相应的市级地图选项

            option = {
                visualMap: {
                    show: false, // 隐藏热力图调节标志
                    min: 0,
                    max: 100, // 根据你的数据设置范围
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: 10,
                    inRange: {
                        color: ['#00008B', '#FF4500'], // 调整热力点的颜色范围
                    },
                },
                geo: {
                    map: selectedProvince,
                    label: {
                        show: true, // 显示省份标签
                        textStyle: {color: '#585858', fontSize: 12}, // 省份标签字体颜色
                    },
                    emphasis: {
                        // 对应的鼠标悬浮效果
                        show: true,
                        textStyle: {color: '#fff'},
                    },
                    zoom: 1.2,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(255, 209, 163, .5)', // 区域边框颜色
                            areaColor: 'rgba(73, 86, 166, .1)', // 区域颜色
                            borderWidth: 0.5, // 区域边框宽度
                            shadowBlur: 5,
                            shadowColor: 'rgba(107, 91, 237, .7)',
                        },
                        emphasis: {
                            borderColor: '#FFD1A3',
                            areaColor: 'rgba(102, 105, 240, .3)',
                            borderWidth: 1,
                            shadowBlur: 5,
                            shadowColor: 'rgba(135, 138, 255, .5)',
                        },
                    },
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        myBackButton: {
                            show: true,
                            title: '回退',
                            icon: 'image://https://echarts.apache.org/zh/images/favicon.png',
                            onclick: function () {
                                alert('myBackButton')
                            }
                        }
                    }
                },
            }
            console.log(option);
            echarts.registerMap(selectedProvince, cityMapData);
        } else {
            // 全国地图渲染，使用全国数据和全国地图选项
            option = {
                ...mapOptions(),
                // // 添加工具栏
                // toolbox: {
                //     show: true,
                //     feature: {
                //         // 添加地图回退按钮
                //         myBackButton: {
                //             show: true,
                //             title: '回退', // 回退按钮的显示文字
                //             icon: 'image://你的回退图标URL', // 可以使用图片作为图标，或者直接使用 'back' 表示默认回退图标
                //             onclick: this.handleBackButtonClick, // 点击回退按钮的事件处理函数
                //         },
                //     },
                // },
            };

        }

        myChart.setOption(option);
        myChart.on('click', this.handleMapClick);
    }

    componentWillUnmount() {
        // 组件卸载时清除点击事件监听器，以防止内存泄漏
        const {id} = this.props;
        const chartDom = document.getElementById(`mapContainer_${id}`);
        const myChart = echarts.getInstanceByDom(chartDom);
        myChart.off('click', this.handleMapClick);
    }

    render() {
        const {id, width, height} = this.props;

        return (
            <div>
                {/* 放置地图容器 */}
                <div
                    id={`mapContainer_${id}`}
                    style={{
                        width: '10.625rem',
                        height: '8.125rem',
                    }}
                ></div>
            </div>
        );
    }
}

export default MapChart;
