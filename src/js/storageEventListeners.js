import LocalStorage from "./localStorage";

const LS = new LocalStorage();

const onWatched = (e) => {
    if (e.target.className !== 'add-to-watched') { return }
    LS.setWatched();
}

const onQueue = (e) => { 
    if (e.target.className !== 'add-to-queue') { return }
    LS.setQueue();  
}

document.body.addEventListener('click', onWatched);
document.body.addEventListener('click', onQueue);
