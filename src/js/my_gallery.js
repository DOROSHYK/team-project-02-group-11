import getRefs from './get-refs';
import Local from './LocalStorage';
import ServerAPI from './serverAPI';
import cardImage from '../template/filmCardShot';


const loc = new Local();
const refs = getRefs();
const API = new ServerAPI;
let currentID = null;

// refs.mainRef.addEventListener('click', onChangeMyLibrary);
refs.headerBtnWrap.addEventListener('click', onMyLibrary);

// function onChangeMyLibrary(e) {
//   const refs = getRefs();
//   const currentEl = e.target.parentNode;
//   const currentID = currentEl.parentNode.dataset.id;

//   API.getFilmInfoById(currentID).then(saveMe);

//   function saveMe(some) {
    
//     const newFilm = API.getObjectForRender(some);
//     loc.addFilm(newFilm);

//     if (e.target.classList.contains('add-to-watched')) loc.setWatched();
//     else if (e.target.classList.contains('add-to-queue')) loc.setQueue();

//   }
// };

function onMyLibrary(e, remove) {
  
  // if(!document.URL.includes('library')) {return}
  //new
  const refs = getRefs();
  refs.clientGallery.innerHTML = '';
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
  refs.clientGallery.insertAdjacentHTML('beforeend', resultLibrary);
  
  }

export default onMyLibrary
