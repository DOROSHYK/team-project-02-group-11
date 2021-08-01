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
        allPage: document.querySelector('body'),
        buttonTheme: document.querySelector('.theme-switch__control'),
        iconTheme: document.querySelector('.theme-switch__track'),
        iconHideTheme: document.querySelector(".theme-switch__icon_hiden")

    }
}