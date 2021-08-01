


const refs = {
    closeBtn: document.querySelector('[data-modal-close]'),
  modalWindow: document.querySelector('[data-modal]'),
    link: document.querySelector('[data-modal-open]'),
//   modal: document.querySelector('.footer-modal'),
}

refs.link.addEventListener('click', onCloseBtn)


refs.closeBtn.addEventListener('click', () => {
    refs.modalWindow.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
});


refs.closeBtn.addEventListener('click', onCloseBtn);

export function onCloseBtn() {
    refs.modalWindow.classList.remove('is-hidden');
    refs.closeBtn.removeEventListener('click', onCloseBtn);
};

document.addEventListener('keydown', onEscapeClose);

export function onEscapeClose(event) {

    if (event.code === 'Escape') {
    
        refs.modalWindow.classList.add('is-hidden');
        document.body.style.overflow = 'auto';
    } 
    
}

window.addEventListener('click', (event) => {
    if (event.target === refs.modalWindow) {
        refs.modalWindow.classList.add('is-hidden');
        document.body.style.overflow = 'auto';
    } 
})







