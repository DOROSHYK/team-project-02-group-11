
import ServerAPI from './serverAPI';
import tempFilmCard from '../template/popFilmCard';
import getRefs from './get-refs.js';
const API = new ServerAPI;
const refs = getRefs();
const debounce = require('lodash.debounce');

window.addEventListener('scroll', debounce(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight) {
        API.page += 1;
        API.getPopularFilmList().then(renderFilms);
        function renderFilms(filmData) {
            const dataForRender = filmData.results.map(result => API.getObjectForRender(result));
            const markup = tempFilmCard(dataForRender);
            refs.popFilmList.insertAdjacentHTML('afterbegin', markup);
            console.log(API.page);
        };
    };
}, 1000));