import getRefs from './get-refs';
import loadLibrary from './my_gallery';

const refs = getRefs();

refs.siteNavigation.addEventListener('click', onHeaderLinkClick);

function onHeaderLinkClick(event) {
    if (event.target.classList.contains('header-link')) {
       if (event.target.getAttribute('href') === '/library') {
            removeElementClass()
            refs.navLinks[2].classList.add('site-nav__link--current');
            refs.header.classList.add('header-library');
            refs.headerInputWrap.classList.add('hide');
           
            loadLibrary();

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