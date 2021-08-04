import LocalStorage from './LocalStorage';
import ServerAPI from './serverAPI';
import getRefs from './get-refs';
const api = new ServerAPI;
const LS = new LocalStorage;


const isBtnFromShortCard = (e, className) => {
    if (!className.includes('film__button')) { return Promise.resolve()}
    return api.getFilmInfoById(e.path[2].dataset.id).then(api.getObjectForRender)
        .then(LS.addFilm.bind(LS));    
}

// const onWatched = (e) => {
//     const className = String(e.target.className);
//     if (!className.includes('add-to-watched')) { return }
//     isBtnFromShortCard(e, className).then(LS.setWatched.bind(LS))
// }

// const onQueue = (e) => {
//     const className = String(e.target.className);
//     if (!className.includes('add-to-queue')) { return }
//     isBtnFromShortCard(e, className).then(LS.setQueue.bind(LS));
// }

//const onRemoveWatched = (e) => {
//     const className = String(e.target.className);
//     if (!className.includes('remove-from-watched')) { return }
//     const id = e.path[2].dataset.id || LS.getLastFilm().id;
//     LS.removeFromWatched(id);
// }
// const onRemoveQueue = (e) => {
//     const className = String(e.target.className);
//     if (!className.includes('remove-from-queue')) { return }
//     const id = e.path[2].dataset.id || LS.getLastFilm().id;
//     LS.removeFromQueue(id);
// }

function onClickAddOrRemoveBtn(e) {
  
    if (e.target.textContent === 'Add to watched') {
        const className = String(e.target.className);
        if (!className.includes('add-to-watched')) { return }
        isBtnFromShortCard(e, className).then(LS.setWatched.bind(LS))
        e.target.textContent = 'Remove watched';
    }

    else if (e.target.textContent === 'Add to queue') {
        const className = String(e.target.className);
        if (!className.includes('add-to-queue')) { return }
        isBtnFromShortCard(e, className).then(LS.setQueue.bind(LS));
        e.target.textContent = 'Remove queue';
    }

    else if (e.target.textContent === 'Remove queue') {
        const className = String(e.target.className);
        if (!className.includes('add-to-queue')) { return }
        const id = e.path[2].dataset.id || LS.getLastFilm().id;
        LS.removeFromQueue(id);
        e.target.textContent = 'Add to queue';
    }

    else if (e.target.textContent === 'Remove watched') {
        const className = String(e.target.className);
        if (!className.includes('add-to-watched')) { return }
        const id = e.path[2].dataset.id || LS.getLastFilm().id;
        LS.removeFromWatched(id);
        e.target.textContent = 'Add to watched';
    }
}


// document.body.addEventListener('click', onWatched);
// document.body.addEventListener('click', onQueue);
// document.body.addEventListener('click', onRemoveWatched);
// document.body.addEventListener('click', onRemoveQueue);
const refs = getRefs();

refs.mainRef.addEventListener('click', onClickAddOrRemoveBtn);
refs.movieModalBtn.addEventListener('click', onClickAddOrRemoveBtn);