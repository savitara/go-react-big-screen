import React, {PureComponent} from "react";
import {Map, Marker} from "react-amap";
import Heatmap from 'react-amap-plugin-heatmap';


const AMAP_API_KEY = '7ab53b28352e55dc5754699add0ad862';

class AaLiMap extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            option: props.option
        };
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

    render() {


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
                                        <Heatmap {...this.state.option.heatmapPluginProps}/>
                                    )

                                }


                                {/* 在地图上添加标记点 */}
                                {this.state.option.markerPositions.map((position, index) => (
                                    <Marker
                                        key={index}
                                        position={position}
                                        extData={{id: `marker-${index + 1}`}}
                                        style={this.state.option.markerStyle} // 设置标记点的样式
                                    />
                                ))}
                            </Map>

                        </div>

                    )

                }

            </>
        );
    }
}

export default AaLiMap;

