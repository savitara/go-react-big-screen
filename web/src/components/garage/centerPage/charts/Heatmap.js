import React, { Component,Fragment } from 'react';

const {AMap} = window;

class Guide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        };
    }

    componentDidMount() {
        this.getCharts();
    }

    // eslint-disable-next-line no-unused-vars
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.data.length > 0) {
            this.setState({
                data: nextProps.data,
            });
            setTimeout(() => {
                this.getCharts();
            }, 500);
        }else{ this.setState({data:[]})}
    }

    getCharts = () => {
        const { data } = this.state;
        const gaoData=[];
        const massData=[];
        // eslint-disable-next-line array-callback-return
        data.map(item=>{
            gaoData.push({ lng:item.longitude, lat:item.latitude, count:item.number})
            massData.push({lnglat:[item.longitude,item.latitude],val:item.number})
        });
        console.log("高德地图",gaoData);
        const map = new AMap.Map('gaoDe', {
            resizeEnable: true,
            center: [108.5, 34.3],
            zoom: 4
        });

        let heatmap;
        map.plugin(["AMap.Heatmap","AMap.Scale",'AMap.ToolBar',], function () {
            // 初始化heatmap对象
            heatmap = new AMap.Heatmap(map, {
                radius: 25, // 给定半径
                opacity: [0, 0.8],
                gradient:{
                    0.5: 'blue',
                    0.65: 'rgb(117,211,248)',
                    0.7: 'rgb(0, 255, 0)',
                    0.9: '#ffea00',
                    1.0: 'red'
                }
            });
            heatmap.setDataSet({
                data: gaoData,// heatmapData
                max: 10
            });
            const scale = new AMap.Scale({
                visible: true,
                offset: new AMap.Pixel(70,20),
            });
            map.addControl(scale);
            map.addControl(new AMap.ToolBar());
        });

        // 海量点标记
        const mass = new AMap.MassMarks(massData, {
            opacity: 0.8,
            zIndex: 111,
            cursor: 'pointer',
            style: {
                url: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
                anchor: new AMap.Pixel(6, 6),
                size: new AMap.Size(15, 15)
            }
        });

        // var marker = new AMap.Marker({content: ' ', map: map});
        // mass.on('mouseover', function (e) {
        //   marker.setPosition(e.data.lnglat);
        //   marker.setLabel({content: e.data.lnglat})
        // });

        const infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -10)});
        mass.on('click', function (e) {
            infoWindow.setContent(`<div>
      标题：热点详细信息
      <br/>地理位置：${e.data.lnglat.lng}, ${e.data.lnglat.lat}
      <br/>最近三个月热力值：${e.data.val}
    </div>`);
            infoWindow.open(map, e.data.lnglat);
        });

        mass.setMap(map);
        // map.setFitView();// 自适应所有的点

        // 点不多，添加mark和信息窗（方案一）
        // const allLength=gaoData.length;
        // for(let i = 0; i < allLength; i += 1){
        //   const marker = new AMap.Marker({
        //     position: [gaoData[i].lng, gaoData[i].lat],
        //     map:map
        //   });
        //
        //   const infoWindow = new AMap.InfoWindow({
        //     anchor: 'bottom-center',
        //     content:`<div><p>这是信息窗体！这是信息窗体！</p><p>${gaoData[i].lng}</p></div>` ,
        //   });
        //   // 鼠标点击marker弹出自定义的信息窗体
        //   marker.on('click', function () {
        //     infoWindow.open(map,[gaoData[i].lng, gaoData[i].lat])
        //   });
        // }

        // 点不多，添加mark和信息窗（方案二）
        // var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
        // const allLength=gaoData.length;
        // function markerClick(e) {
        //   infoWindow.setContent(e.target.content);
        //   infoWindow.open(map, e.target.getPosition());
        // }
        // for(let i = 0; i < allLength; i += 1){
        //   const marker = new AMap.Marker({
        //     position: [gaoData[i].lng, gaoData[i].lat],
        //     map:map
        //   });
        //   marker.content = '我是第' + (i + 1) + '个Marker';
        //   marker.on('click', markerClick);
        // }
    };

    render(){
        return (
            <Fragment>
                <div id="gaoDe" style={{ width: '100%', height: 600 }}>
                    {' '}
                </div>
                <div
                    style={{
                        height:200,
                        width:30,
                        position:"relative",
                        left:20,
                        top: -230,
                    }}
                >
                    10
                    <div
                        style={{
                            width:20,
                            height: 170,
                            background: `linear-gradient(to top,blue,green 33%, yellow 66%, red)`,
                        }}
                    />
                    0
                </div>
            </Fragment>

        );
    }
}

export default Guide;
