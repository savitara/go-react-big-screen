import React, {PureComponent} from "react";
import {ConfigProvider} from "antd";
import {Map,  Marker} from "react-amap";
import Guide from "./Heatmap";
import Heatmap from 'react-amap-plugin-heatmap';
// import Geolocation from 'react-amap-plugin-geolocation';
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
        const {markerPositions, centerPosition, amapZoom} = this.props;

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
        const heatmapData = [
            {lng: 116.397428, lat: 39.90923, count: 10},
            {lng: 116.41005, lat: 39.94907, count: 20},
            // 更多数据...
        ];

        const points = [
            {"lng": 116.191031, "lat": 39.988585, "count": 10},
            {"lng": 116.389275, "lat": 39.925818, "count": 11},
            {"lng": 116.287444, "lat": 39.810742, "count": 12},
            {"lng": 116.481707, "lat": 39.940089, "count": 13},
            {"lng": 116.410588, "lat": 39.880172, "count": 14},
            {"lng": 116.394816, "lat": 39.91181, "count": 15},
            {"lng": 116.416002, "lat": 39.952917, "count": 16}
        ];

// config props
        const visible = true;
        const radius = 30;
        const gradient = {
            '0.4': 'rgb(0, 255, 255)',
            '0.65': 'rgb(0, 110, 255)',
            '0.85': 'rgb(100, 0, 255)',
            '1.0': 'rgb(100, 0, 255)'
        };
        const zooms = [3, 18];
        const dataSet = {
            data: points,
            max: 100
        }

        const pluginProps = {
            visible,
            radius,
            gradient,
            zooms,
            dataSet
        }
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
                        {/*<Geolocation {...pluginProps} />*/}
                        <Heatmap {...pluginProps} />
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

            </>
        );
    }
}

export default AaLiMap;

