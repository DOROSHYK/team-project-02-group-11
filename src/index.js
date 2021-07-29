localStorage.clear();
localStorage.getItem('films') || localStorage.setItem('films', JSON.stringify({
    all: [],
    watched: [],
    queue: []
}));
console.log(JSON.parse(localStorage.getItem('films')))
import './sass/main.scss';
import './js/close-modal.js';
import './js/serverAPI.js';
import './js/renderPopFilmList';
import './js/filmCardShot.js';
import './js/local-storage.js';




