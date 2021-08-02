import getRefs from './get-refs';
import Local from './LocalStorage';
import cardImage from '../template/filmCardShot';

const loc = new Local();
let refs = getRefs();
let someDate = loc.getWatched();

refs.headerBtnWrap.addEventListener('click', onMyLibrary);

function onMyLibrary(e) {
  refs = getRefs();
  refs.clientGallery.innerHTML = '';
  
  if (e.target.textContent === 'Watched') {
    someDate = loc.getWatched();
    console.log(someDate);
  }
  else if (e.target.textContent === 'Queue') {
      someDate = loc.getQueue();
  }

  const resultLibrary = someDate.map(el => cardImage(el)).join('');
  refs.clientGallery.insertAdjacentHTML('beforeend', resultLibrary);
  }


