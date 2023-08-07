import React, {useEffect, useRef} from 'react';
import flvjs from 'flv.js';


const PlayerComponentLiv = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (flvjs.isSupported()) {
      const flvPlayer = flvjs.createPlayer({
        type: 'flv',
        enableWorker: true, 	//浏览器端开启flv.js的worker,多进程运行flv.js
        hasAudio: false, 			//音频开启
        hasVideo: true,				//视频开启
        enableStashBuffer: false, //设置启用播放缓存，只在直播起作用（降低延迟）
        isLive: true,
        // url: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
        url: 'http://192.168.10.151:7001/live/movie.flv',
      });

      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();

      return () => {
        flvPlayer.pause();
        flvPlayer.unload();
        flvPlayer.detachMediaElement();
        flvPlayer.destroy();
      };
    }
  }, []);

  return (
    <div style={{position: 'relative', padding: 0, margin: '20px auto', width: 700}}>
      <video ref={videoRef} controls/>
    </div>
  );
};

export default PlayerComponentLiv;
