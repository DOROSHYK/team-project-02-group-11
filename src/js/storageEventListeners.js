import getRefs from "./get-refs";
import LocalStorage from "./localStorage";
import ServerAPI from "./serverAPI";
import onMyLibrary from "./my_gallery";
const api = new ServerAPI;
const LS = new LocalStorage;

const refs = getRefs();


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

const onRemoveWatched = (e) => {
    const className = String(e.target.className);
    if (!className.includes('remove-from-watched')) { return }
    const id = e.path[2].dataset.id || LS.getLastFilm().id;
    LS.removeFromWatched(id);
    if (document.URL.includes('library')){onMyLibrary(e, 'watched')}
}
const onRemoveQueue = (e) => {
    const className = String(e.target.className);
    if (!className.includes('remove-from-queue')) { return }
    const id = e.path[2].dataset.id || LS.getLastFilm().id;
    LS.removeFromQueue(id);
    if (document.URL.includes('library')){onMyLibrary(e, 'queue')}
}


document.body.addEventListener('click', onWatched);
document.body.addEventListener('click', onQueue);
document.body.addEventListener('click', onRemoveWatched);
document.body.addEventListener('click', onRemoveQueue);
