import React, {PureComponent} from "react";
import {Map, Marker} from "react-amap";
import Heatmap from 'react-amap-plugin-heatmap';


const AMAP_API_KEY = '7ab53b28352e55dc5754699add0ad862';

class AaLiMap extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // 组件挂载完成
    }

    componentDidUpdate() {
        // 组件更新完成
    }

    render() {
        const {option} = this.props;

        let mapStyle = option.mapStyle;
        let markerStyle = option.markerStyle;
        let setMapStyle = option.setMapStyle;
        let markerPositions = option.markerPositions;
        let amapZoom = option.amapZoom;
        let centerPosition = option.centerPosition;
        let heatmapPluginProps = option.heatmapPluginProps;


        return (
            <>
                {
                    option && (
                        <div style={mapStyle}>
                            <Map
                                amapkey={AMAP_API_KEY}

                                zoom={amapZoom}
                                mapStyle={setMapStyle}
                                center={centerPosition}
                            >
                                {
                                    heatmapPluginProps && (
                                        <Heatmap {...heatmapPluginProps}/>
                                    )

                                }


                                {/* 在地图上添加标记点 */}
                                {markerPositions.map((position, index) => (
                                    <Marker
                                        key={index}
                                        position={position}
                                        extData={{id: `marker-${index + 1}`}}
                                        style={markerStyle} // 设置标记点的样式
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

