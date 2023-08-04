import React, {PureComponent} from "react";
import {ConfigProvider} from "antd";
import {Map, Marker} from "react-amap";

const AMAP_API_KEY = '7ab53b28352e55dc5754699add0ad862';
const AMAP_VERSION = '2.0'; // 设置高德地图的版本号

class AaLiMap extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // console.log("AaLiMap component did mount"); // 调试信息：组件挂载完成
    }

    componentDidUpdate() {
        // console.log("AaLiMap component did update"); // 调试信息：组件更新完成
    }

    render() {
        const {markerPositions,centerPosition,amapZoom} = this.props;

        // 设置地图的样式
        const mapStyle = {
            width: '5.115rem',
            height: '5.115rem',
        };

        // 设置标记点的样式
        const markerStyle = {
            background: 'red', // 设置标记点的背景颜色为红色
            borderRadius: '50%', // 设置标记点为圆形
            width: '20px',
            height: '20px',
            border: '2px solid white', // 设置标记点的边框颜色为白色
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', // 设置标记点的阴影效果
        };

        // 模拟标记点的位置数据
        // const markerPosition = {longitude: 120, latitude: 30};
        // const setMapStyle = 'amap://styles/blue';
        // 样式参考  https://lbs.amap.com/api/javascript-api/guide/map/map-style
        const setMapStyle = 'amap://styles/dark';
        // const setMapStyle = 'amap://styles/grey';
        // const setMapStyle = 'amap://styles/darkblue';

        return (
            <>
                <div style={mapStyle}>
                    <Map
                        amapkey={AMAP_API_KEY}
                        // version={AMAP_VERSION}
                        zoom={amapZoom}
                        mapStyle={setMapStyle}
                        center={centerPosition}
                    >
                        {/* 在地图上添加标记点 */}
                        {markerPositions.map((position, index) => (
                            <Marker
                                key={index}
                                position={position}
                                extData={{ id: `marker-${index + 1}` }}
                                style={markerStyle} // 设置标记点的样式
                            />
                        ))}
                    </Map>
                </div>
            </>
        );
    }
}

export default AaLiMap;

