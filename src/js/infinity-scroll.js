
import ServerAPI from './serverAPI';
import tempFilmCard from '../template/popFilmCard';
import getRefs from './get-refs.js';
import { renderPopFilms } from './renderPopFilmList';
import make from './create_card';

const API = new ServerAPI;
const refs = getRefs();
const debounce = require('lodash.debounce');

let searchQuery = '';



window.addEventListener('scroll', debounce(() => {
    
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight) {
        if (!refs.popFilmList.classList.contains('visually-hidden')) {
            API.page += 1;
            API.getPopularFilmList().then(renderPopFilms);
                
        } else if (refs.popFilmList.classList.contains('visually-hidden')) {
            API.page += 1;
            
            API.getFilmByKeyword(searchQuery)
                .then(make);
            
        };
    }
}, 1000));

refs.inputRef.addEventListener('input', onMagic);



function onMagic(e) {
  e.preventDefault();
  
  refs.gallery.innerHTML = '';
  refs.popFilmList.classList.remove('visually-hidden');
  searchQuery = e.target.value;

    if (!searchQuery.trim().length) return;
    
   
    const whatThis = API.getFilmByKeyword(searchQuery)
                        .then(make)

};