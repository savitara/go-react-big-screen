import React, { useEffect, useRef } from 'react';
import flvjs from 'flv.js';

const PlayerComponentLiv = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (flvjs.isSupported()) {
            const flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
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
        <div style={{ position: 'relative', padding: 0, margin: '20px auto', width: 700 }}>
            <video ref={videoRef} controls />
        </div>
    );
};

export default PlayerComponentLiv;
