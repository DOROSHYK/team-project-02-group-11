
import ServerAPI from './serverAPI';
import tempFilmCard from '../template/popFilmCard';
import getRefs from './get-refs.js';
//import { renderPopFilms } from './renderPopFilmList';
import make from './create_card';
import { startSpin, stopSpin } from './spiner/spiner';
import notification from './notifications.js';
import { debounce } from 'lodash';

const API = new ServerAPI;
let refs = getRefs();
// const debounce = require('lodash.debounce');

let searchQuery = '';
console.log(API.isLoading);
//=====   infinity scroll

const ioCallback = ([entrie], observerRef) => {
    refs = getRefs();
    
    if (API.isLoading) {

        if (!entrie.isIntersecting) return;

         else if (!refs.popFilmList.classList.contains('visually-hidden')) {
           
            API.page += 1;
            API.getPopularFilmList().then(renderPopFilms);  
        }
        else if (refs.popFilmList.classList.contains('visually-hidden')) {
           
            API.page += 1;
            API.getFilmByKeyword(searchQuery)
                 .then(make);
        };
  }
};

const observer = new IntersectionObserver(ioCallback, { threshold: 0.5 });

const target = document.querySelector('#anchor');
observer.observe(target);



refs.inputRef.addEventListener('input',  debounce(onMagic,  1500));

function onMagic(e) {
    //e.preventDefault();
    API.isLoading = true;
    API.page = 1;
    const refs = getRefs();
    refs.gallery.innerHTML = '';
    refs.popFilmList.classList.remove('visually-hidden');
        // stopSpin();
    searchQuery = e.target.value;

    if (!searchQuery.trim().length)  return notification.incorrectRequest();
    stopSpin();
   
    API.getFilmByKeyword(searchQuery)
                        .then(make)

};

function renderPopFilms(filmData) {
    API.isLoading = true;
    const dataForRender = filmData.results.map(result => API.getObjectForRender(result));
    // if (dataForRender.poster_path)


    console.log(API.isLoading);
    
    const markup = tempFilmCard(dataForRender);
    const refs = getRefs();

    refs.popFilmList.insertAdjacentHTML('beforeend', markup);
//refs.footer.classList.remove('is-fixed');
};

 API.getPopularFilmList().then(renderPopFilms);
