// запрос по якому підгр. трейлер

// `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`

// самий програвач,який потрібно помістити в вікно,можна лайтбокс
// `<iframe width="560" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
// залишилась логіка

import ServerAPI from './serverAPI';
const newAPI = new ServerAPI();
console.log('🚀 ~ file: trailer.js ~ line 11 ~ newAPI', newAPI);

const key = newAPI.API;
console.log('🚀 ~ file: trailer.js ~ line 14 ~ key', key);

// console.log('🚀 ~ file: trailer.js ~ line 17 ~ getPopularFilmList', getPopularFilmList);
