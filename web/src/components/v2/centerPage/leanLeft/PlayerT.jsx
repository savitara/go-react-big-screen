import React, {useEffect, useRef} from 'react';
// import WgiVideoPlayer from 'wgi-video-player';
// import 'wgi-video-player/lib/wgi-video-player.css';
import {ReactFlvPlayer} from 'react-flv-player'


import Reflv from 'reflv';

const PlayerComponent = () => {


  const videoUrl = 'http://39.134.65.162/PLTV/88888888/224/3221225611/index.m3u8'
  // const videoUrl = 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv'
  // const videoUrl = 'http://192.168.10.151:7001/live/movie.flv'



  return (
    <div style={{position: 'relative', padding: 0, margin: '20px auto', width: 700}}>


      <ReactFlvPlayer
          // src={videoUrl}
          url={videoUrl}
          type="hls"
          width="560px"
          height="350px"
      />
      {/*<Reflv*/}
      {/*  url={videoUrl}*/}
      {/*  type="flv"*/}
      {/*  isLive*/}
      {/*  // cors*/}
      {/*  // config={{*/}
      {/*  //   enableWorker: true,*/}
      {/*  //   enableStashBuffer: false,*/}
      {/*  //   stashInitialSize: 128,*/}
      {/*  // }}*/}
      {/*/>*/}

      {/*<ReactjsPlayer kernel="flvjs" live={true} src={videoUrl} type="video/x-flv" />*/}
    </div>)
};

export default PlayerComponent;
