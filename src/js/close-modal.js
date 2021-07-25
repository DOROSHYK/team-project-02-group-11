

// refs.closeBtn.addEventListener('click', onCloseBtn);
export function onCloseBtn(event) {
    refs.modalWindow.classList.remove('is-open');
    refs.closeBtn.remuveEventListener('click', onCloseBtn);
};

// window.addEventListener('keydown', onEscapeClose);
export function onEscapeClose(event) {
    if (event.code === 'Escape') {
        return onCloseBtn()
    };
    window.remuveEventListener('keydown', onEscapeClose);
};
