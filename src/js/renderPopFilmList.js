import ServerAPI from './serverAPI';
import tempFilmCard from '../template/popFilmCard';
import getRefs from './get-refs';
import genres from './genres.json';

const API = new ServerAPI;
API.getPopularFilmList().then(renderPopFilms);

function renderPopFilms(filmData) {
    
    const dataForRender = filmData.results.map(result => API.getObjectForRender(result));
    // if (dataForRender.poster_path)



    const markup = tempFilmCard(dataForRender);
    const refs = getRefs();

    refs.popFilmList.insertAdjacentHTML('beforeend', markup);
//refs.footer.classList.remove('is-fixed');
}

export {renderPopFilms }












