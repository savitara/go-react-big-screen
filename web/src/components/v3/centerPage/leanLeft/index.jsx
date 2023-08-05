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
      videoDisplayRows: 4, // 默认设置为4行
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
    console.log(LeanLeftData)
    console.log(videoPlayList)
    return (

      <LeftDiv>

        {
          videoData && (

            <BorderRadiusBox1>
              <div style={{width: '5rem'}}>
                <ModuleTitle>
                  <i className='iconfont'>&#xe78f;</i>
                  <span>{videoData.title}</span>

                  <Select style={{marginLeft:'0.3rem'}} value={this.state.videoDisplayRows} onChange={this.handleVideoDisplayChange}>
                    <Select.Option value={2}>两行</Select.Option>
                    <Select.Option value={4}>四行</Select.Option>
                  </Select>
                </ModuleTitle>
                <div>
                  {videoPlayList.map((rowVideos, index) => (
                    <div key={index} style={{display: 'flex'}}>
                      {rowVideos.map((video) => (
                        <div key={video.title}  className={'video-player'}>
                          {/*<h3>{video.url}</h3>*/}
                          <video src={video.url} controls style={{width: '90%'}}></video>
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
