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

function onMyLibrary(e) {
  const refs = getRefs();
  refs.clientGallery.innerHTML = '';
  let someDate = null;

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


