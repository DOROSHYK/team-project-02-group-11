import getRefs from './get-refs';
import movieCardTemplate from '../template/filmcardModal.hbs';
import Api from './serverAPI';
import LocalStorage from './LocalStorage';
import { addMovieModalListener } from './close-modal';
const refs = getRefs();
const api = new Api();
const LS = new LocalStorage;
document.getElementById('app').addEventListener('click', onMovieClick);

function onMovieClick(event) {
    event.preventDefault();
    

    if (event.target.dataset.id || event.target.parentNode.dataset.id) {
        refs.movieModal.classList.remove('is-hidden');
        addMovieModalListener();
        api.getFilmInfoById(event.target.dataset.id).then(data => {
            const objRender = api.getObjectForRender(data);
            LS.addFilm(objRender);
            return objRender
        }).then(appendMarkup);
        document.body.style.overflow = 'hidden';
        
    }

    getRefs().movieModal.addEventListener('click', onModalButtonClick);

function onModalButtonClick(e) {

    if (e.target.dataset.id || e.target.parentNode.dataset.id) {
        if (e.target.classList.contains('add-button')) {
            if (e.target.textContent === 'Add to watched' || e.target.textContent === 'Remove watched') {
                e.target.disabled = false;
                e.target.nextElementSibling.disabled = true;
            }

            else if (e.target.textContent === 'Add to queue' || e.target.textContent === 'Remove queue') {
                e.target.disabled = false;
                e.target.previousElementSibling.disabled = true;   
            };
        };
    };
    };
};

function appendMarkup(data) {
    refs.movieModalInfoContainer.innerHTML = '';
    refs.movieModalInfoContainer.insertAdjacentHTML('beforeend', movieCardTemplate(data));
}

// function getMovieData(id) {
//     api.getFilmInfoById(id);
// }