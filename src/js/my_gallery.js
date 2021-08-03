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

function onMyLibrary(e) {
  refs = getRefs();
  refs.clientGallery.innerHTML = '';

  if (e.target.textContent === 'Watched') { 
      someDate = loc.getWatched();
  }

  else if (e.target.textContent === 'Queue') {
      someDate = loc.getQueue();
  }
 
    resultLibrary = someDate.map(el => cardImage(el)).join(''); 
    refs.clientGallery.insertAdjacentHTML('beforeend', resultLibrary);

};

export default function onLoadLibrary() {

  if (!someDate) return;

  refs = getRefs();

  resultLibrary = someDate.map(el => cardImage(el)).join('');
  newLib.insertAdjacentHTML('beforeend', resultLibrary);
  refs.containerLib.appendChild(newLib) ;

};







  const resultLibrary = someDate.map(el => {
    let genresArr = el.genres.split(', ');
    if (genresArr.length > 2) {
      el.genres = genresArr.splice(0, 2).join(', ') + ", others"
    }
    return cardImage(el)
  }).join('');
  refs.clientGallery.insertAdjacentHTML('beforeend', resultLibrary);
  }



