import getRefs from './get-refs';
import Local from './LocalStorage';
import cardImage from '../template/filmCardShot';

 const refs = getRefs();

refs.siteNavigation.addEventListener('click', onHeaderLinkClick);

const loc = new Local();

let someDate = loc.getWatched();

// const removeBtnsTextContent = async () => {
                   
//  getRefs().addToQueueBtnsFilmCard.forEach((btn) => {
//     btn.textContent = 'Remove queue';
// });
//  getRefs().addToWatchedBtnsFilmCard.forEach((btn) => {
//     btn.textContent = 'Remove watched';
// });
// };
               
export default function renderLibraryPage(date) {
    
    getRefs().library.innerHTML = '';
               
    const resultLibrary = date.map(el => cardImage(el)).join('');
    getRefs().library.insertAdjacentHTML('beforeend', resultLibrary);
             
    getRefs().addToQueueBtnModal.textContent = 'Remove queue';
    getRefs().addToWatchedBtnModal.textContent = 'Remove watched';
               
    //removeBtnsTextContent();
}

 function onHeaderLinkClick(event) {
    if (event.target.classList.contains('header-link')) {
       if (event.target.getAttribute('href') === '/library') {
           removeElementClass()
            refs.navLinks[2].classList.add('site-nav__link--current');
            refs.header.classList.add('header-library');
            refs.headerInputWrap.classList.add('hide');

            if (loc.getWatched().length === 0 && loc.getQueue().length > 0) {
                someDate = loc.getQueue();
                refs.headerBtns[1].classList.add('button--current');
                refs.headerBtns[0].classList.remove('button--current');
                
           } else {
               someDate = loc.getWatched();
           }
           setTimeout(() => {
               renderLibraryPage(someDate);   
           }, 0)
           

        } else {
            removeElementClass()
            refs.header.classList.add('header-home');
        }
    }
}

function removeElementClass() {
    refs.navLinks.forEach((link) => {
    link.classList.remove('site-nav__link--current');
    })

    refs.headerBtnWrap.classList.remove('hide');
    refs.headerInputWrap.classList.remove('hide');
    refs.header.classList.remove('header-home');
    refs.header.classList.remove('header-library');
}