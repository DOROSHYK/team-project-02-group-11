import LocalStorage from './LocalStorage';
import ServerAPI from './serverAPI';
const api = new ServerAPI;
const LS = new LocalStorage;


const isBtnFromShortCard = (e, className) => {
    if (!className.includes('film__button')) { return Promise.resolve()}
    return api.getFilmInfoById(e.path[2].dataset.id).then(api.getObjectForRender)
        .then(LS.addFilm.bind(LS));    
}

const onWatched = (e) => {
    const className = String(e.target.className);
    if (!className.includes('add-to-watched')) { return }
    isBtnFromShortCard(e, className).then(LS.setWatched.bind(LS))
}

const onQueue = (e) => {
    const className = String(e.target.className);
    if (!className.includes('add-to-queue')) { return }
    isBtnFromShortCard(e, className).then(LS.setQueue.bind(LS));
}

document.body.addEventListener('click', onWatched);
document.body.addEventListener('click', onQueue);
