import cardTemplate from '../template/filmCardShot.hbs';
import filmcardModal from '../template/filmcardModal.hbs'
import ServerAPI from './serverAPI';
const api = new ServerAPI;
import getRefs from './get-refs';
import LocalStorage from './LocalStorage';
const LS = new LocalStorage;
// LS.clear();
// LS.setInit();
// console.log(LS.getLastFilm());
// console.log(LS.getWatched());
// LS.removeFromWatched(730840);
// console.log(LS.getQueue());

// const cl = () => console.log(getRefs());
// let a = setTimeout(cl, 1000)
// api.getFilmByKeyword('throne').then(data => {
//     const filmData = data.results[0];
//     console.log(api.getObjectForRender(filmData));
//     const markup = cardTemplate(api.getObjectForRender(filmData));
//     console.log(markup)
    // document.body.insertAdjacentHTML('afterbegin', markup);
    // document.body.insertAdjacentHTML('afterbegin', markup);
// })
/* const onClick = (e) => {
    e.preventDefault();
    const id = e.path[1].dataset.id || e.path[2].dataset.id;
    if (!id) return 
    api.getFilmInfoById(+id).then(dataFilm => {
        const markObj = api.getObjectForRender(dataFilm);
        const markup = filmcardModal(markObj);
        console.log(markup);
        document.body.insertAdjacentHTML('afterbegin', markup);
    })
}
document.body.addEventListener('click', onClick); */
// console.log(document.URL);
// import onMyLibrary from './my_gallery';
// console.log(onMyLibrary)
// onMyLibrary({}, 'watched')
// let q = 'watched';
// document.body.addEventListener('click', (e) => onMyLibrary(e, 'queue'))
// if (document.URL.includes('library'))
;
