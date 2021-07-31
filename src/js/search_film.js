import getRefs from './get-refs';
import genres from './genres.json';
import ServerAPI from './serverAPI';
import make from './create_card';


const refs = getRefs();
const API = new ServerAPI;
let searchQuery = 42;
refs.inputRef.addEventListener('input', onMagic);
export default searchQuery;

function onMagic(e) {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  refs.popFilmList.classList.remove('visually-hidden');
  searchQuery = e.target.value;
  console.log(searchQuery)
    if (!searchQuery.trim().length) return;
    
  //  API.keyWord = searchQuery;
    const whatThis = API.getFilmByKeyword(searchQuery)
                        .then(make)

};

