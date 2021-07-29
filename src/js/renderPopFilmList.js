import ServerAPI from './serverAPI';
import tempFilmCard from '../template/popFilmCard';
import getRefs from './get-refs';
import genres from './genres.json';
import { startSpin, stopSpin } from './spiner/spiner.js';

const refs = getRefs();
const API = new ServerAPI;
API.getPopularFilmList().then(renderPopFilms);

function renderPopFilms(filmData) {
    startSpin();
    const dataForRender = filmData.results.map(result => API.getObjectForRender(result));

    
    console.log(dataForRender);
    const markup = tempFilmCard(dataForRender);
    refs.popFilmList.insertAdjacentHTML('afterbegin', markup);
    stopSpin();
refs.footer.classList.remove('is-fixed');
}






