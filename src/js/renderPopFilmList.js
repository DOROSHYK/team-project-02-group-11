import ServerAPI from './serverAPI';
import tempFilmCard from '../template/popFilmCard';
import getRefs from './get-refs';
import genres from './genres.json';

const refs = getRefs();
const API = new ServerAPI;
API.getPopularFilmList().then(renderPopFilms);

function renderPopFilms(filmData) {
    for (let i = 0; i < filmData.results.length; i++) {
        const filmInfo = filmData.results[i];
        const dataForRender = API.getObjectForRender(filmInfo);
        console.log(dataForRender);
        const markup = tempFilmCard(dataForRender);
     refs.popFilmList.insertAdjacentHTML('afterbegin', markup);
refs.footer.classList.remove('is-fixed');
    }
    

   // const markup = tempFilmCard(options);
    
    // for (let i = 0; i < genresIds.length; i++) {
    //     const genreNames = genresIds[i].map(id_genre => {
    //         const genre = genres.find(item => item.id === id_genre);
    //         if (genre === undefined) return;
    //         return genre.name;
    //     });
        
    //     console.log(genreNames);
        
        
    //     //console.log(genreName);
    // }
    //console.log(genreNames)
    //refs.footer.classList.remove('is-fixed');

}


// function getGenresById(ids) {
    
//     for (let i = 0; i < ids.length; i++) {
//         const genreNames = ids[i].map(id_genre => {
//             const genre = genres.find(item => item.id === id_genre);
//             if (genre === undefined) return;
//             return genre.name;
//         });
        
//         //console.log(genreNames);
        
//         return genreNames;
//         //console.log(genreName);
//     }
    
//  }



//  const genresIds = filmData.results.map(result => result.genre_ids);
//     console.log(getGenresById(genresIds));
//     const filmInfo = filmData.results;
//     const options = {
//         img_path: filmInfo.map(result => result.poster_path),
//         title: filmInfo.map(result => result.title),
//         genres: getGenresById(genresIds),
//         year: filmInfo.map(result => result.release_date.slice(0,4)),
//     }
