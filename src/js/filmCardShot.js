import cardTemplate from '../template/filmCardShot.hbs';
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

