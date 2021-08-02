
import ServerAPI from './serverAPI';
import tempFilmCard from '../template/popFilmCard';
import getRefs from './get-refs.js';
import { renderPopFilms } from './renderPopFilmList';
import make from './create_card';
import { startSpin, stopSpin } from './spiner/spiner';

const API = new ServerAPI;
const refs = getRefs();
const debounce = require('lodash.debounce');

let searchQuery = '';



window.addEventListener('scroll', debounce(() => {
   
    const refs = getRefs();
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight) {
        refs.toTopBtn.classList.remove('visually-hidden');
        if (!refs.popFilmList.classList.contains('visually-hidden')) {
             
            API.page += 1;
            API.getPopularFilmList().then(renderPopFilms);
            
        } else if (refs.popFilmList.classList.contains('visually-hidden')) {

            API.page += 1;
            
            API.getFilmByKeyword(searchQuery)
                .then(make);

        };
    }
}, 1500));

refs.inputRef.addEventListener('input', onMagic);



function onMagic(e) {
    e.preventDefault();
  const refs = getRefs();
  refs.gallery.innerHTML = '';
    refs.popFilmList.classList.remove('visually-hidden');
    // stopSpin();
  searchQuery = e.target.value;

    if (!searchQuery.trim().length)  return;
    stopSpin();
   
    const whatThis = API.getFilmByKeyword(searchQuery)
                        .then(make)

};