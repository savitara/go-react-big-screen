// import React, { useEffect, useRef } from 'react';
// // import WasmPlayer from '@easydarwin/easywasmplayer' //导入WasmPlayer.js
//
//
// const PlayerComponent = () => {
//   const playerRef = useRef(null);
//
//   useEffect(() => {
//     const player = document.getElementById('player')
//     console.log(player)
//     // player.addEventListener('ended', endPlay)
//     // player.addEventListener('timeupdate', timeupdate)
//     return () => {
//       // player.removeEventListener('ended', endPlay)
//       // player.removeEventListener('timeupdate', timeupdate)
//     }
//   }, [])
//
//   const videoUrl='https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4'
//
//   return (
//     <div style={{ position: 'relative', padding: 0, margin: '20px auto', width: 700 }}>
//       <WasmPlayer
//         id="player"
//         // video-url  undefined 容易白屏 设置为 ''
//         video-url={videoUrl || ''}
//         fluent="true" // 流畅模式
//         stretch // 是否拉伸
//         muted="true" // 是否静音
//         hide-big-play-button
//         live="false"
//         autoplay
//         controls
//         // current-time={currentTime}
//         // aspect="fullscreen" // 长比高的值过大 可能导致样式布局变化  不随外层div大小
//       />
//     </div>)
// };
//
// export default PlayerComponent;
