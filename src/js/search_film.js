import getRefs from './get-refs';
import genres from './genres.json';
import ServerAPI from './serverAPI';
import make from './create_card';


const refs = getRefs();
const API = new ServerAPI;

refs.inputRef.addEventListener('input', onMagic);



function onMagic(e) {
  e.preventDefault();
  
  refs.gallery.innerHTML = '';
  refs.popFilmList.classList.remove('visually-hidden');
  const searchQuery = e.target.value;

    if (!searchQuery.trim().length) return;
    
   
    const whatThis = API.getFilmByKeyword(searchQuery)
                        .then(make)

};

export {onMagic,}