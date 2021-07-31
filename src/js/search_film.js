import getRefs from './get-refs';
import ServerAPI from './serverAPI';
import make from './create_card';

const refs = getRefs();

refs.inputRef.addEventListener('input', onMagic);

const debounce = require('lodash.debounce');

const API = new ServerAPI;

refs.inputRef.addEventListener('input',  debounce(onMagic, 700));


function onMagic(e) {

  e.preventDefault();
  const refs = getRefs();
  refs.gallery.innerHTML = '';
  //refs.popFilmList.classList.remove('visually-hidden');
  const searchQuery = e.target.value;

    if (!searchQuery.trim().length) return;
    
  //  API.keyWord = searchQuery;
  const whatThis = API.getFilmByKeyword(searchQuery)
    .then(make);
  
 

};

