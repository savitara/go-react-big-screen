import React, { PureComponent } from 'react';
import { ModuleTitle, LeftDiv, DataBox, BorderRadiusBox1 } from '../style';

class LeanLeft extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      videoDisplayRows: 6, // Default to 5 rows
    };
  }

  handleVideoDisplayChange = (value) => {
    this.setState({ videoDisplayRows: value });
  };

  render() {
    const { LeanLeftData } = this.props;
    let videoData = null;
    let videoPlayList = [];
    if (LeanLeftData) {
      videoData = LeanLeftData.videoData;
      let playList = videoData.list;

      const displayRows = this.state.videoDisplayRows;
      const columns = 2;
      const videosPerColumn = Math.ceil(playList.length / columns);

      for (let i = 0; i < columns; i++) {
        const columnVideos = playList.slice(i * videosPerColumn, (i + 1) * videosPerColumn);
        videoPlayList.push(columnVideos);
      }
    }
    const boxStyle = {
      width: videoData.boxWidth,
      height: videoData.boxHeight,
    };
    const videoPlayerStyle = {
      width: videoData.videoPlayerWidth,
    };
    const sources = {
      hd: {
        play_url: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
      },
      // sd: {
      //     play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
      // },
    };

    return (
      <LeftDiv>
        {videoData && (
          <BorderRadiusBox1>
            <div style={boxStyle}>
              <ModuleTitle>
                <i className='iconfont'>&#xe78f;</i>
                <span>{videoData.title}</span>
              </ModuleTitle>
              <div style={{ margin: '0.02rem', display: 'flex' }}>
                {videoPlayList.map((columnVideos, index) => (
                  <div key={index} style={{ flex: 1 }}>
                    {columnVideos.map((video) => (
                      <div key={video.title} className={'video-player'}>
                        <video
                          id={index}
                          src={video.url}
                          controls
                          autoPlay={true}
                          style={videoPlayerStyle}
                        ></video>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </BorderRadiusBox1>
        )}
      </LeftDiv>
    );
  }
}

export default LeanLeft;
