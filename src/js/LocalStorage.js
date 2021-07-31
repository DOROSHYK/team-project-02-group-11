export default class LocalStorage {
    
    setInit() {
        let films = {
            total: [],
            queue: [],
            watched: []
        }
        this.saveAll(films)
    }
    addFilm(filmObjRender) {
        const arr = this.loadAll();
        arr.total.push(filmObjRender);
        console.log(arr)
        this.saveAll(arr);
    }
    setQueue() {
        const films = this.loadAll();
        const currentFilm = films.total[films.total.length - 1];
        if (films.queue.some(film => film.id === currentFilm.id)) {
            console.log('этот фильм уже есть в коллекции');
            console.log(films)
        return
         }
        films.watched.forEach((film, idx, arr) => film.id === currentFilm.id ? arr.splice(idx, 1) : null)
        films.queue.push(currentFilm);
        
        this.saveAll(films)
        console.log('добавлено в коллекцию');
        console.log(films)
    }
    getQueue() {
       return this.loadAll().queue;
    }
    setWatched() {
        const films = this.loadAll();
        const currentFilm = films.total[films.total.length - 1];
        if (films.watched.some(film => film.id === currentFilm.id)) {
            console.log('этот фильм уже есть в коллекции');
            console.log(films)
        return
         }
        films.queue.forEach((film, idx, arr) => film.id === currentFilm.id ? arr.splice(idx, 1) : null)
        films.watched.push(currentFilm);
        
        this.saveAll(films)
        console.log('добавлено в коллекцию');
        console.log(films)
    }
    getWatched() {
        return this.loadAll().watched;
    }
    searchById(id) {
        return this.loadAll().total.find(film => film.id === id)
    }
    saveAll(films) {
        localStorage.setItem('films', JSON.stringify(films));
    }
    loadAll() {
        return JSON.parse(localStorage.getItem('films')) 
    }
    clear() {
        localStorage.clear();
    }
}