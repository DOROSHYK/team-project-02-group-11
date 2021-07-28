import ServerAPI from './serverAPI';
import tempFilmCard from '../template/popFilmCard';
import getRefs from './get-refs';
import genres from './genres.json';

const refs = getRefs();
const API = new ServerAPI;
API.getPopularFilmList().then(renderPopFilms);

function renderPopFilms(filmData) {

    const dataForRender = filmData.results.map(result => API.getObjectForRender(result));

    
    console.log(dataForRender);
    const markup = tempFilmCard(dataForRender);
    refs.popFilmList.insertAdjacentHTML('afterbegin', markup);
refs.footer.classList.remove('is-fixed');
}






