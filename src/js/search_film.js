import { navigateTo } from '../static/js/app.js';
import getRefs from './get-refs';
import genres from './genres.json';
import ServerAPI from './serverAPI';
import make from './create_card';



const refs = getRefs();
const API = new ServerAPI;

refs.inputRef.addEventListener('input', onMagic);
refs.inputRef.addEventListener('focus', (() => {
  navigateTo('/home');
  refs.navLinks[1].classList.add('site-nav__link--current');
}));

function onMagic(e) {

  e.preventDefault();
  const refs = getRefs();
  refs.gallery.innerHTML = '';
  //refs.popFilmList.classList.remove('visually-hidden');
  const searchQuery = e.target.value;

    if (!searchQuery.trim().length) return;
    
  //  API.keyWord = searchQuery;
    const whatThis = API.getFilmByKeyword(searchQuery)
                        .then(make)

};

