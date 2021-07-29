import cardTemplate from '../template/filmCardShot.hbs';
import filmcardModal from '../template/filmcardModal.hbs'
import ServerAPI from './serverAPI';
const api = new ServerAPI;

api.getFilmByKeyword('throne').then(data => {
    const filmData = data.results[0];
    console.log(api.getObjectForRender(filmData));
    const markup = cardTemplate(api.getObjectForRender(filmData));
    console.log(markup)
    document.body.insertAdjacentHTML('afterbegin', markup);
    // document.body.insertAdjacentHTML('afterbegin', markup);
})
const onClick = (e) => {
    
    e.preventDefault();
    console.log(e.target.className);
    const id = e.path[1].dataset.id || e.path[2].dataset.id;
    if (!id) return 
    api.getFilmInfoById(+id).then(dataFilm => {
        const markObj = api.getObjectForRender(dataFilm);
        const films = JSON.parse(localStorage.getItem('films'));
        console.log(films);
        films.all.push(markObj);
        localStorage.setItem('films', JSON.stringify(films));
        const markup = filmcardModal(markObj);
        console.log(markup);
        document.body.insertAdjacentHTML('afterbegin', markup);
    })
}
document.body.addEventListener('click', onClick);



