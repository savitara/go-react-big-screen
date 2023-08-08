import React, {PureComponent} from "react";
import {InfoWindow, Map, Marker} from "react-amap";
import Heatmap from 'react-amap-plugin-heatmap';

const AMAP_API_KEY = '7ab53b28352e55dc5754699add0ad862';

class AaLiMap extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            option: props.option,
            center: {
                longitude: 116.292829,
                latitude: 39.946039
            }
        };
        this.inputRef = React.createRef(); // 创建输入框元素的引用
    }

    componentDidMount() {
        // 组件挂载完成
    }

    componentDidUpdate(prevProps) {
        const {option} = this.props;
        console.log('option 发生变化')
        const prevOption = prevProps.option;

        // 检查option是否发生变化
        if (JSON.stringify(option) !== JSON.stringify(prevOption)) {
            // 执行需要进行的操作，例如更新状态或重新获取数据
            console.log('sssss  option 发生变化')
        }
    }

    childMethod = (value) => {
        console.log('子组件方法')
        this.setState({
            option: value
        })
        // 立即强制重新渲染
        this.forceUpdate();
        // console.log(this.state.option.heatmapPluginProps.dataSet.max)
    }

    childMethodOfSearch = (value) => {
        console.log('子组件方法')
        let option = this.state.option;
        option.amapZoom = 10; // 设置地图缩放级别
        option.centerPosition.longitude=value.longitude;
        option.centerPosition.latitude=value.latitude;

        this.setState({
            option: value
        })
        // 立即强制重新渲染
        this.forceUpdate();
        // console.log(this.state.option.heatmapPluginProps.dataSet.max)
    }

    onAutocompleteSelect = (e) => {
        if (e.poi.location) {
            this.setState({
                option: {
                    ...this.state.option,
                    centerPosition: [e.poi.location.lng, e.poi.location.lat]
                }
            });
        }
    }
    // on select item
    selectfunc = (e) => {
        console.log(e);
        // if(e.poi.location) {
        //     this.setState({center:{longitude: e.poi.location.lng, latitude: e.poi.location.lat}})
        // }
    }


    render() {
        const pluginProps = {
            input: 'input0', // 将输入框引用传递给插件
        };
        return (
            <>
                {
                    this.state.option && (
                        <div style={this.state.option.mapStyle}>
                            <Map
                                amapkey={AMAP_API_KEY}
                                zoom={this.state.option.amapZoom}
                                mapStyle={this.state.option.setMapStyle}
                                center={this.state.option.centerPosition}
                            >

                                {
                                    this.state.option.heatmapPluginProps && (
                                        <Heatmap {...this.state.option.heatmapPluginProps} />
                                    )
                                }
                                {/* 在地图上添加标记点 */}
                                {this.state.option.markersList.map((item, index) => (
                                    <Marker
                                        key={index}
                                        icon={item.icon ? item.icon : null}
                                        title={item.title?item.title:null}
                                        visible={item.visible}
                                        label={item.label?item.label:null}
                                        position={item.position}
                                        extData={{id: `marker-${index + 1}`}}
                                        // onClick={}
                                    />
                                ))}

                                {/*{winPosition && (*/}
                                {/*    <InfoWindow*/}
                                {/*        visiable={show}*/}
                                {/*        position={winPosition}*/}
                                {/*        offset={{ x: 0, y: -10}}*/}
                                {/*        content={content}                                        */}
                                {/*    />*/}
                                {/*)}*/}
                            </Map>
                        </div>
                    )
                }
            </>
        );
    }
}

export default AaLiMap;
