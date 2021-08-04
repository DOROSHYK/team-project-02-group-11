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
        footerCloseModalBtn: document.querySelector('.close-footer-modal-js'),
        closeModalButton: document.querySelector('[data-modal-close]'),

        allPage: document.querySelector('body'),
        buttonTheme: document.querySelector('.theme-switch__control'),
        iconTheme: document.querySelector('.theme-switch__track'),
        iconHideTheme: document.querySelector(".theme-switch__icon_hiden"),


        toTopBtn: document.querySelector('.to-top-js'),
        ancor: document.querySelector('.page-header__navigation'),
        clientGallery: document.querySelector(".clients-lib"),
        mainRef: document.querySelector("#app"),
        library: document.getElementById('library-list'),
        containerLib: document.querySelector("main"),
        cardFilBtnWrap: document.querySelector('.card-film-btn__container'),
        movieModalBtn: document.querySelector('.add-buttons-list'),
        headerBtns: document.querySelectorAll('.header__button'),

    }
}