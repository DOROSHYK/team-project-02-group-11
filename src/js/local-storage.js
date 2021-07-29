const watchedEl = document.body.querySelector('.add-to-watched');
const queueEl = document.body.querySelector('.add-to-queue');
onWatched = (e) => {
    if (e.target.className !== 'add-to-watched') { return }
    console.log(localStorage.getItem('films'))
    const films = JSON.parse(localStorage.getItem('films'));
    console.log(films)
    const currentFilm = films.all[films.all.length - 1];
    if (films.watched.some(film => 
        film.id === currentFilm.id
    )) {
        console.log('этот фильм уже есть в коллекции');
        return
    }
    films.watched.push(currentFilm);
    localStorage.setItem('films', JSON.stringify(films));
    console.log('добавлено в коллекцию');
    console.log(films)
}
onQueue = (e) => { 
    if(e.target.className !== 'add-to-queue') {return}
    const films = JSON.parse(localStorage.getItem('films'));
    console.log(films)
    const currentFilm = films.all[films.all.length-1];
    console.log()

    if (films.queue.some(film => 
        film.id === currentFilm.id
    )) {
        console.log('этот фильм уже есть в коллекции');
        return
    }
    films.queue.push(currentFilm);
    localStorage.setItem('films', JSON.stringify(films));
    console.log('добавлено в коллекцию');
    console.log(films);
}

document.body.addEventListener('click', onWatched);
document.body.addEventListener('click', onQueue);