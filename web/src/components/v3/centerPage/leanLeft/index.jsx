import React, {PureComponent} from 'react';
import {ModuleTitle, LeftDiv, DataBox, BorderRadiusBox1} from '../style';
import EchartComponent from "../../../homePage/centerPage/charts/EchartComponent";
import {Select} from "antd";
import ReactPlayer from 'react-player'
import VideoPlayer from "../../VideoPlayer";

class LeanLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            videoDisplayRows:6, // 默认设置为6行
        };
    }

    handleVideoDisplayChange = (value) => {
        this.setState({videoDisplayRows: value});
    };

    render() {

        const {LeanLeftData} = this.props;
        let videoData = null;
        let videoPlayList = [];
        if (LeanLeftData) {
            videoData = LeanLeftData.videoData;
            let palyList = videoData.list;

            const displayRows = this.state.videoDisplayRows;
            const videosPerRow = Math.ceil(palyList.length / displayRows);

            for (let i = 0; i < displayRows; i++) {
                const rowVideos = palyList.slice(i * videosPerRow, (i + 1) * videosPerRow);
                videoPlayList.push(rowVideos);
            }
        }
        const boxStyle = {
            width: videoData.boxWidth, height: videoData.boxHeight
        }
        const videoPlayerStyle = {
            width: videoData.videoPlayerWidth
        }
        return (

            <LeftDiv>

                {
                    videoData && (

                        <BorderRadiusBox1>
                            <div style={boxStyle}>
                                <ModuleTitle>
                                    <i className='iconfont'>&#xe78f;</i>
                                    <span>{videoData.title}</span>

                                    <Select style={{marginLeft: '0.3rem'}} value={this.state.videoDisplayRows}
                                            onChange={this.handleVideoDisplayChange}>
                                        <Select.Option value={4}>四行</Select.Option>
                                        <Select.Option value={6}>六行</Select.Option>


                                    </Select>
                                </ModuleTitle>
                                <div style={{margin: '0.02rem'}}>
                                    {videoPlayList.map((rowVideos, index) => (
                                        <div key={index} style={{display: 'flex'}}>
                                            {rowVideos.map((video) => (
                                                <div key={video.title} className={'video-player'}>
                                                    {/*<h3>{video.url}</h3>*/}
                                                    <video src={video.url} controls
                                                           style={videoPlayerStyle}></video>
                                                    {/*<VideoPlayer src={video.url} />;*/}
                                                    {/*<ReactPlayer controls url={video.url} playing />*/}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </BorderRadiusBox1>
                    )
                }

            </LeftDiv>


        );
    }
}

export default LeanLeft;
