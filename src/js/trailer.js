// запрос по якому підгр. трейлер

// `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`

// самий програвач,який потрібно помістити в вікно,можна лайтбокс
// `<iframe width="560" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
// залишилась логіка

import ServerAPI from './serverAPI';
const newAPI = new ServerAPI();
console.log('🚀 ~ file: trailer.js ~ line 11 ~ newAPI', newAPI);

// 1. <div id="player"></div> добавить в HTML

// // 2. This code loads the IFrame Player API code asynchronously.
// const tag = document.createElement('script');

// tag.src = 'https://www.youtube.com/iframe_api';
// const firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// let player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '360',
//     width: '640',
//     videoId: 'INLzqh7rZ-U',
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange,
//     },
//   });
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }

// https://developers.google.com/youtube/iframe_api_reference?hl=ru
