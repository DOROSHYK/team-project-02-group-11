import getRefs from './get-refs';
import Local from './LocalStorage';
import ServerAPI from './serverAPI';

const loc = new Local();
const refs = getRefs();
const API = new ServerAPI;

document.querySelector('#app').addEventListener('click', onChangeMyLibrary);

function onChangeMyLibrary(e) {
  e.preventDefault();
  const currentEl = e.target.parentNode;
  const currentID = currentEl.parentNode.dataset.id;

  API.getFilmInfoById(currentID).then(saveMe);

  function saveMe(some) {
    
    const newFilm = API.getObjectForRender(some);

    loc.addFilm(newFilm);

    if (e.target.classList.contains('add-to-watched')) loc.setWatched();
    else if (e.target.classList.contains('add-to-queue')) loc.setQueue();

  }

}