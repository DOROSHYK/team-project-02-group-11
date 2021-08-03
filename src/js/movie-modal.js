import getRefs from './get-refs';
import movieCardTemplate from '../template/filmcardModal.hbs';
import Api from './serverAPI';
import LocalStorage from './LocalStorage';
const refs = getRefs();
const api = new Api();
const LS = new LocalStorage;
document.getElementById('app').addEventListener('click', onMovieClick);

function onMovieClick(event) {
    event.preventDefault();
    

    if (event.target.dataset.id || event.target.parentNode.dataset.id) {
        refs.movieModal.classList.remove('is-hidden');
        api.getFilmInfoById(event.target.dataset.id).then(data => {
            const objRender = api.getObjectForRender(data);
            LS.addFilm(objRender);
            return objRender
        }).then(appendMarkup);
        document.body.style.overflow = 'hidden';
    }
}

function appendMarkup(data) {
    refs.movieModalInfoContainer.innerHTML = '';
    refs.movieModalInfoContainer.insertAdjacentHTML('beforeend', movieCardTemplate(data));
}

// function getMovieData(id) {
//     api.getFilmInfoById(id);
// }