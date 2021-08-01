import cardTemplate from '../template/filmCardShot.hbs';
import filmcardModal from '../template/filmcardModal.hbs'
import ServerAPI from './serverAPI';
const api = new ServerAPI;
import getRefs from './get-refs';
const cl = () => console.log(getRefs());
let a = setTimeout(cl, 1000)
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



