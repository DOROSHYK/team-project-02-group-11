import cardTemplate from '../template/filmCardShot.hbs';
import ServerAPI from './serverAPI';
const api = new ServerAPI;
import genres from './genres.json'
console.log(genres[0].id);

api.getFilmByKeyword('sherlock').then(data => {
    const genres = api.getGenreById(data.results[0].genre_ids)
    console.log(data.results[0]);
    console.log(genres);
    const filmData = data.results[0]
    const options = {
        poster_path: filmData.poster_path,
        title: filmData.title,
        genres: genres.join(', '),
        year: filmData.release_date.slice(0, 4),
        vote_average: filmData.vote_average
    }
    const markup = cardTemplate(options);
    console.log(markup)
    // document.body.insertAdjacentHTML('afterbegin', markup);
    // document.body.insertAdjacentHTML('afterbegin', markup);
})

