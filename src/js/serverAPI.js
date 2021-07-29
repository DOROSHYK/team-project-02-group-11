import genres from './genres.json';
export default class ServerAPI {
    constructor() {
        this.APIkey = 'fd6eb8c46328921cf1133ef8e877d946';
        this.baseURL = 'https://api.themoviedb.org/3/';
        this.mediaType = 'movie';
        this.page = '1';
        this.language = 'en';
        this.keyWord = '';
        this.genres = genres;

    }
    getPopularFilmList() {
        return fetch(`${this.baseURL}trending/all/week?api_key=${this.APIkey}&page=${this.page}&language=${this.language}`)
            .then(response => {
               if (response.ok) return response.json();
               throw new Error("Error fetching data");
            })
            .catch(err => {
                console.error("Error: ", err);
            }); 
    }
    getFilmByKeyword(keyWord) {
        this.keyWord = keyWord;
        return fetch(`${this.baseURL}search/${this.mediaType}?api_key=${this.APIkey}&query=${keyWord}&page=${this.page}&language=${this.language}`)
            .then(response => {
               if (response.ok) return response.json();
               throw new Error("Error fetching data");
            })
            .catch(err => {
                console.error("Error: ", err);
            }); 
    }
    getFilmInfoById(id) {
        return fetch(`${this.baseURL}${this.mediaType}/${id}?api_key=${this.APIkey}&language=${this.language}`)
            .then(response => {
               if (response.ok) return response.json();
               throw new Error("Error fetching data");
            })
            .catch(err => {
                console.error("Error: ", err);
            }); 
    }
    // возвращает массив объектов типа {id: 27, name: "Horror"} - соответсвий жанров их id
    getGenresList() {
        return fetch(`${this.baseURL}genre/${this.mediaType}/list?api_key=${this.APIkey}&language=${this.language}`)
            .then(res => res.json())
            .catch((error) => console.log(error))
    }
    //принимает числовой массив с id жанров, возвращает строковый массив названий жанров
    getGenreById(id) {
       const genreArray = id.map(id_genre => {
            const genre = this.genres.find(genre => id_genre === genre.id);
           if (genre === undefined) return;
                return genre.name;   
       })
        if (genreArray.length > 2) {
            return genreArray.slice(0, 2).join(', ') + ', ' + 'Other';
        }
        if (genreArray.includes(undefined)) {
            return genreArray.join('');
        } else {
            return genreArray.join(', ');
        }

    }
    //принимает объект одного фильма в формате, который получен с сервера. Возвращает объект для рендеринга
    //разметки по шаблону. Обїект можно сразу передавать в функцию-шаблонизатор (пример в файле filmCardShot.js).
    // названия перменных в Вашем шаблоне должны совпадать с именами свойств в возвращаемом объекте
    
    getObjectForRender(filmData) {
        return {
            poster_path: filmData.poster_path || filmData.backdrop_path,
            title: filmData.title || filmData.original_name,
            genres: filmData.genres ?
                filmData.genres.map(genre => genre.name).join(', ') : this.getGenreById(filmData.genre_ids), 
            year: filmData.release_date === undefined ? filmData.first_air_date.slice(0, 4) : filmData.release_date.slice(0, 4),
            vote_average: filmData.vote_average.toFixed(1),
            overview: filmData.overview,
            popularity: filmData.popularity.toFixed(1),
            vote_count: filmData.vote_count,
            original_title: filmData.original_title,
            id: filmData.id
        }
    }

}