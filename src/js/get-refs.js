export default function getRefs() {
    return {
        inputRef: document.querySelector('.header-input'),
        gallery: document.querySelector('.gallery'),
        popFilmList: document.querySelector('.js-pop-film-list'),
        footer: document.querySelector('.footer'),
        siteNavigation: document.querySelector('.page-header__navigation'),
        navLinks: document.querySelectorAll('.header-link'),
        header: document.querySelector('.header'),
        headerInputWrap: document.querySelector('.header-input__container'),
        headerBtnWrap: document.querySelector('.header-buttons__container'),
        movieModalInfoContainer: document.querySelector('.movie-info'),
        movieModal: document.querySelector('.js-movie-backdrop'),
        footerModal: document.querySelector('.js-footer-backdrop'),
        footerModalOpener: document.querySelector('.js-open-team-modal'),
        closeModalButton: document.querySelector('[data-modal-close]')
    }
}