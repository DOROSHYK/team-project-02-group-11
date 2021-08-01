import getRefs from './get-refs';
import movieCardTemplate from '../template/filmcardModal.hbs';
import Api from '../js/serverAPI';

const refs = getRefs();
const api = new Api();

document.getElementById('app').addEventListener('click', onMovieClick);

function onMovieClick(event) {
    event.preventDefault();
    

    if (event.target.dataset.id || event.target.parentNode.dataset.id) {
        refs.movieModal.classList.remove('is-hidden');
        
        api.getFilmInfoById(event.target.dataset.id).then(api.getObjectForRender).then(appendMarkup);
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