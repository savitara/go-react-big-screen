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
            seriesName: '',//用于存储当前选中的市级名称
            currentProvincialName: '',//用于存储当前选中的省级名称,用于判断下钻
            zoomLevel: 0, // 用于记录地图的层级，0表示全国地图，1表示省级地图，2表示市级地图
            BackProvincialName: '',//用于存储当前选中的省级名称,用于回退
            BackProvincialCityData: '',//城市数据，用于回退
            backProvincialFlag: false,//用于判断是否回退

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

    handleChinaProvincialData(name) {
        let adcode = 0;
        //遍历省级行政
        for (let i in chinaProvincialData.chinaProvincialData.features) {
            if (chinaProvincialData.chinaProvincialData.features[i].properties.name === name) {
                console.log(chinaProvincialData.chinaProvincialData.features[i].properties);
                adcode = chinaProvincialData.chinaProvincialData.features[i].properties.adcode;
                let currentProvincialName = adcode + '-' + name
                this.setState({
                    currentProvincialName: currentProvincialName,
                    BackProvincialName: name,
                });
            }
        }
        return adcode;
    }

    // 点击地图的事件处理函数
    handleMapClick = async (params) => {
        console.log(params);
        // 获取点击位置的名称（名称）
        const {name} = params;
        // 如果没有名称信息，说明点击的不是省份区域，直接返回
        if (!name) return;

        console.log('点击了:', name);
        let adcode = this.handleChinaProvincialData(name);
        // //遍历省级行政
        //点击的不是省级行政而是市级行政
        if (adcode === 0) {
            let cityMapDataFeatures = this.state.cityMapData.features
            for (let i in cityMapDataFeatures) {
                if (cityMapDataFeatures[i].properties.name === name) {
                    let adcode = cityMapDataFeatures[i].properties.adcode;
                    let seriesName = this.state.currentProvincialName + '-' + adcode + '-' + name
                    this.setState({
                        seriesName: seriesName,
                    });
                }
            }
        }
        console.log('currentProvincialName:', this.state.currentProvincialName, '\nseriesName:', this.state.seriesName);
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
                    BackProvincialCityData: res.data,
                });
            }  // 可下钻到三级地图（23个省、5个自治区 的市级区域）
            else if (EXISTING_THIRD_LAYER_REGION.find(i => `${i.adcode}-${i.name}` === this.state.currentProvincialName)) {
                // 台湾，无法下钻（暂无市级区域geojson数据）
                if (this.state.currentProvincialName.includes(TAIWAN_ADCODE)) return
                const mapName = this.state.seriesName
                console.log(mapName)
                const res = await getGeoJson('city', mapName)
                console.log(res.data);
                // 更新选中的省份状态和市级地图数据，触发重新渲染
                this.setState({
                    selectedProvince: name,
                    cityMapData: res.data,
                    currentProvincialName: '',
                    seriesName: '',
                });
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // 在回退按钮的点击事件处理函数中
    handleBackButtonClick = () => {
        const {zoomLevel} = this.state;
        if (zoomLevel === 0) {
            // 当处于全国地图时，点击回退按钮无效
        } else if (zoomLevel === 1) {
            // 当处于省级地图时，进行回退到全国地图
            this.setState({
                selectedProvince: null,
                cityMapData: null,
                zoomLevel: 0,
            });
        } else if (zoomLevel === 2) {
            this.handleChinaProvincialData(this.state.BackProvincialName)
            // 当处于市级地图时，进行回退到省级地图
            const provinceName = this.state.BackProvincialName; // 获取市级地图所属的省份名称
            const provincialCityData = this.state.BackProvincialCityData
            console.log(provinceName);

            this.setState({
                selectedProvince: provinceName, // 设置选中的省份为市级地图所属的省份名称
                cityMapData: provincialCityData, // 设置市级地图数据为省级地图数据
                zoomLevel: 1,
                backProvincialFlag: true,
            });
        }
    };


    renderChart() {
        const {mapData} = this.props;
        const {selectedProvince, cityMapData, zoomLevel} = this.state;
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
                            onclick: () => {
                                this.handleBackButtonClick(); // 使用箭头函数确保this指向正确
                            },
                        }
                    }
                },
            }
            console.log(option);
            echarts.registerMap(selectedProvince, cityMapData);
            // 更新zoomLevel
            if (zoomLevel === 0) {
                this.setState({zoomLevel: 1});
            } else if (zoomLevel === 1 && !this.state.backProvincialFlag) {
                this.setState({zoomLevel: 2});
            }
            this.setState({backProvincialFlag: false});
        } else {
            // 全国地图渲染，使用全国数据和全国地图选项
            option = {
                ...mapOptions(),
            };
            // 重置zoomLevel
            this.setState({zoomLevel: 0});

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
        // 重置zoomLevel
        this.setState({zoomLevel: 0});
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
