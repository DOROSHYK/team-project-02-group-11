import getRefs from './get-refs';
import Local from './LocalStorage';
import ServerAPI from './serverAPI';
import cardImage from '../template/filmCardShot';


const loc = new Local();
const refs = getRefs();
const API = new ServerAPI;
let currentID = null;

refs.headerBtnWrap.addEventListener('click', onMyLibrary);

function onMyLibrary(e, remove) {
  const refs = getRefs();
  
    // refs.clientGallery.innerHTML = '' ;
  document.querySelector('#library-list').innerHTML = '';
  let someDate = null;
  if (e.target.textContent === 'Watched' || remove === 'watched') {
    
    someDate = loc.getWatched();
    
  }
  else if (e.target.textContent === 'Queue' || remove === 'queue') {
    
      someDate = loc.getQueue();
  }
  const resultLibrary = someDate.map(el => {
    let genresArr = el.genres.split(', ');
    if (genresArr.length > 2) {
      el.genres = genresArr.splice(0, 2).join(', ') + ", others"
    }
    return cardImage(el)
  }).join('');
  // refs.clientGallery.insertAdjacentHTML('beforeend', resultLibrary);
  document.querySelector('#library-list').insertAdjacentHTML('beforeend', resultLibrary);
  }

export default onMyLibrary
