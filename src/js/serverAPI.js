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
    getPoularFilmList() {
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
        return id.map(id_genre => this.genres.find(genre => id_genre === genre.id).name)
 }
}