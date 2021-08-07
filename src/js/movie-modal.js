import getRefs from './get-refs';
import movieCardTemplate from '../template/filmcardModal.hbs';
import Api from './serverAPI';
import LocalStorage from './LocalStorage';
import { addMovieModalListener } from './close-modal';
import renderLibraryPage from './changePage';
const refs = getRefs();
const api = new Api();
const LS = new LocalStorage;
document.getElementById('app').addEventListener('click', onMovieClick);

function onMovieClick(event) {
    event.preventDefault();
    console.log(event.target)
    
    if (event.target.dataset.id || event.target.parentNode.dataset.id) {
        refs.movieModal.classList.remove('is-hidden');
        addMovieModalListener();

        

        if (!refs.headerBtnWrap.classList.contains('hide')) {
        api.getFilmInfoById(event.target.dataset.id).then(data => {
            const objRender = api.getObjectForRender(data);
            LS.addFilm(objRender);
            return objRender
        }).then(appendMarkup)
           .then(currentButton);
        document.body.style.overflow = 'hidden';
            return;
        }

        api.getFilmInfoById(event.target.dataset.id).then(data => {
            const objRender = api.getObjectForRender(data);
            LS.addFilm(objRender);
            return objRender
        }).then(appendMarkup)
          
        document.body.style.overflow = 'hidden';
        
    }

    setTimeout(() => {
        checkFilmInLocalStorage(event.target.dataset.id);
    }, 0);
};

    getRefs().movieModal.addEventListener('click', onModalButtonClick);

export default function onModalButtonClick(e) {

    if (e.target.dataset.id || e.target.parentNode.dataset.id) {
        if (e.target.classList.contains('add-button')) {

            if (e.target.textContent === 'Add to watched') {

                e.target.disabled = false;
                e.target.nextElementSibling.disabled = true;
                e.target.textContent = 'Remove watched';
                e.target.className = 'add-to-watched watched add-button uppercase';
                //e.target.className = 'remove-from-watched add-button uppercase';
            }

            else if (e.target.textContent === 'Remove watched') {

                e.target.disabled = false;
                e.target.nextElementSibling.disabled = false;
                e.target.textContent = 'Add to watched';
                //e.target.className = 'add-to-watched watched add-button uppercase';
                e.target.className = 'remove-from-watched add-button uppercase';
            }

            else if (e.target.textContent === 'Add to queue') {
                e.target.disabled = false;
                e.target.previousElementSibling.disabled = true;
                e.target.textContent = 'Remove queue';
                //e.target.className = 'remove-from-queue add-button uppercase';
                e.target.className = 'add-button add-to-queue queue uppercase';
            }

            else if (e.target.textContent === 'Remove queue') {
                e.target.disabled = false;
                e.target.previousElementSibling.disabled = false;
                e.target.textContent = 'Add to queue';
                //e.target.className = 'add-button add-to-queue queue uppercase';
                e.target.className = 'remove-from-queue add-button uppercase';
            };
        };
    };
    };




function appendMarkup(data) {
    refs.movieModalInfoContainer.innerHTML = '';

    let classText = 'add-to-watched watched';
    let text = 'add to';

    const moveCardCh = movieCardTemplate(data);

    //console.log(moveCardCh);

    refs.movieModalInfoContainer.insertAdjacentHTML('beforeend', movieCardTemplate(data));
};

function currentButton() {
     document.body.querySelector('#add-queue').textContent = 'Remove queue';
    document.body.querySelector('#add-watched').textContent = 'Remove watched';         
    // // getRefs().addToQueueBtnModal.textContent = 'Remove queue';
    // // getRefs().addToWatchedBtnModal.textContent = 'Remove watched';
    document.body.querySelector('#add-queue').className = 'remove-from-queue add-button uppercase';
    document.body.querySelector('#add-watched').className = 'remove-from-watched add-button uppercase';
    
}

 
  function checkFilmInLocalStorage(id) {
        const refs = getRefs();
        let filmsInWatched = [];
        LS.getWatched().map (film => filmsInWatched.push(film.id));

        let filmsInQueue = [];
        LS.getQueue().map(film => filmsInQueue.push(film.id));
        let idFilm = parseInt(id);

        if (filmsInQueue.includes(idFilm)) {
            console.log(1)
            // console.log(getRefs().addToQueueBtnModal)
            // getRefs().addToWatchedBtnModal.disabled = true;
            // getRefs().addToQueueBtnModal.textContent = 'Remove queue';
            // getRefs().addToQueueBtnModal.classList.add('remove-from-queue add-button uppercase');
            // getRefs().addToQueueBtnModal.classList.remove('add-button add-to-queue queue uppercase');
        }
        else if (filmsInWatched.includes(idFilm)) {
            console.log(2)
         }
};
