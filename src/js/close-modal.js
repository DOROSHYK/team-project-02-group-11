const refs = {
    closeBtn: document.querySelector('[data-modal-close]'),
  modalWindow: document.querySelector('.backdrop'),
  link: document.querySelector('.footer_link'),
}

refs.link.addEventListener('click', onCloseBtn)

refs.closeBtn.addEventListener('click', onCloseBtn);
export function onCloseBtn(event) {
    refs.modalWindow.classList.remove('is-hidden');
    // refs.closeBtn.removeEventListener('click', onCloseBtn);
};

window.addEventListener('keydown', onEscapeClose);
export function onEscapeClose(event) {
    
    if (event.code === 'Escape') {
        // return onCloseBtn()
        refs.modalWindow.classList.add('is-hidden'); 
    };
    
    
    // window.removeEventListener('keydown', onEscapeClose);
};
