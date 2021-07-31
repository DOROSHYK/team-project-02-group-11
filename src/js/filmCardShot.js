import cardTemplate from '../template/filmCardShot.hbs';
import filmcardModal from '../template/filmcardModal.hbs'
import ServerAPI from './serverAPI';
import getRefs from './get-refs';
const refs = getRefs();
const api = new ServerAPI;
import searchQuery from './search_film';
const onCatch = () => {
    
    console.log('запрос');
    console.log(searchQuery);
}
refs.inputRef.addEventListener('input', onCatch);


api.getFilmByKeyword('throne').then(data => {
    const filmData = data.results[0];
    console.log(api.getObjectForRender(filmData));
    const markup = cardTemplate(api.getObjectForRender(filmData));
    console.log(markup)
    // document.body.insertAdjacentHTML('afterbegin', markup);
    // document.body.insertAdjacentHTML('afterbegin', markup);
})
/* const onClick = (e) => {
    e.preventDefault();
    const id = e.path[1].dataset.id || e.path[2].dataset.id;
    if (!id) return 
    api.getFilmInfoById(+id).then(dataFilm => {
        const markObj = api.getObjectForRender(dataFilm);
        const markup = filmcardModal(markObj);
        console.log(markup);
        document.body.insertAdjacentHTML('afterbegin', markup);
    })
}
document.body.addEventListener('click', onClick); */



