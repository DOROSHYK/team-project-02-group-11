import getRefs from './get-refs';
import Local from './LocalStorage';
import cardImage from '../template/filmCardShot';
import { create } from 'handlebars';

const loc = new Local();
let refs = getRefs();
let someDate = loc.getWatched();
let resultLibrary = null;

let newLib = document.createElement('ul');
newLib.classList.add('clients-lib');
newLib.classList.add('film-cards__list'); //  для стилей

refs.headerBtnWrap.addEventListener('click', onMyLibrary);

function onMyLibrary(e, remove) {
  const refs = getRefs();
  console.log(refs);
  refs.clientGallery.innerHTML = '';
  console.log('wrqw')
  console.log(document.URL.includes('library'));
  let someDate = null;

  if (e.target.textContent === 'Watched'|| remove === 'watched') {
    someDate = loc.getWatched();
    console.log(someDate);
  }
  else if (e.target.textContent === 'Queue'|| remove ==='queue') {
      someDate = loc.getQueue();
  }
  

  const resultLibrary = someDate.map(el => {
    let genresArr = el.genres.split(', ');
    if (genresArr.length > 2) {
      el.genres = genresArr.splice(0, 2).join(', ') + ", others"
    }
    return cardImage(el)
  }).join('');
  refs.clientGallery.insertAdjacentHTML('beforeend', resultLibrary);
  }

// export default onMyLibrary
