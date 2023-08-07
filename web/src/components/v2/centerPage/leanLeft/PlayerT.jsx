import React, {useEffect, useRef} from 'react';
// import WgiVideoPlayer from 'wgi-video-player';
// import 'wgi-video-player/lib/wgi-video-player.css';
// import {ReactFlvPlayer} from 'react-flv-player'



const PlayerComponent = () => {


  const videoUrl = 'http://39.134.65.162/PLTV/88888888/224/3221225611/index.m3u8'

  return (
    <div style={{position: 'relative', padding: 0, margin: '20px auto', width: 700}}>


        {/*<ReactFlvPlayer*/}
        {/*    src={videoUrl}*/}
        {/*    type="hls"*/}
        {/*    width="560px"*/}
        {/*    height="350px"*/}
        {/*/>*/}


    </div>)
};

export default PlayerComponent;
