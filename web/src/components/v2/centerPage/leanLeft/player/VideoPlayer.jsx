import React, {useEffect} from 'react';
import FlvJs from 'flv.js';
import DPlayer from 'dplayer';

const VideoPlayer = () => {

  useEffect( () => {
    // const url = 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv'

    const url = 'http://192.168.10.151:7001/live/movie.flv';
    const dp = new DPlayer({
      container: document.getElementById('video'),
      video: {
        url,
        type: 'customFlv',
        customType: {
          customFlv (video) {
            const flvPlayer = FlvJs.createPlayer({
              type: 'flv',
              url: video.src,
            });
            flvPlayer.attachMediaElement(video);
            flvPlayer.load();
          },
        },
      },
    });
    dp.play();
  }, []);

  return (<div id="video" />);
}
export default VideoPlayer;
