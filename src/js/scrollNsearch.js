import getRefs from './get-refs';
import genres from './genres.json';
import ServerAPI from './serverAPI';
import make from './create_card';
import tempFilmCard from '../template/popFilmCard';
const debounce = require('lodash.debounce');

const refs = getRefs();
const API = new ServerAPI;
const searchQuery = '';
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

window.addEventListener('scroll', debounce(() => {
    
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight) {

        console.log(searchQuery);

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