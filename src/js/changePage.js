import getRefs from './get-refs';
import Local from './LocalStorage';
import cardImage from '../template/filmCardShot';

const refs = getRefs();

refs.siteNavigation.addEventListener('click', onHeaderLinkClick);

const loc = new Local();

let someDate = loc.getWatched();

 function onHeaderLinkClick(event) {
    if (event.target.classList.contains('header-link')) {
       if (event.target.getAttribute('href') === '/library') {
           removeElementClass()
            refs.navLinks[2].classList.add('site-nav__link--current');
            refs.header.classList.add('header-library');
            refs.headerInputWrap.classList.add('hide');
            if (event.target.textContent === 'Watched') {
                someDate = loc.getWatched();
            } else if (event.target.textContent === 'Queue') {
                someDate = loc.getQueue();
            }
           setTimeout(() => {
               const refs = getRefs();
               const resultLibrary = someDate.map(el => cardImage(el)).join('');
               refs.library.insertAdjacentHTML('beforeend', resultLibrary);
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