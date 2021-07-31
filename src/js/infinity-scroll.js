
import ServerAPI from './serverAPI';
import tempFilmCard from '../template/popFilmCard';
import getRefs from './get-refs.js';
import { renderPopFilms } from './renderPopFilmList';
import { onMagic } from './search_film.js';
import make from './create_card';

const API = new ServerAPI;
const refs = getRefs();
const debounce = require('lodash.debounce');



window.addEventListener('scroll', debounce(() => {
    
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight) {
        if (!refs.popFilmList.classList.contains('visually-hidden')) {
            API.page += 1;
            API.getPopularFilmList().then(renderPopFilms);
                
        } else if (refs.popFilmList.classList.contains('visually-hidden')) {
            API.page += 1;
            // refs.inputRef.addEventListener('input', (e) => {
            //     const searchQuery = e.target.value;
            //     console.log(searchQuery);
                API.getFilmByKeyword()
                        .then(make)
            // });
                
            console.log(API.page);
            
            // API.getFilmByKeyword().then (data => console.log(data.results));
            
            
        };
    }
}, 1000));
