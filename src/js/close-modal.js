


const refs = {
    closeBtn: document.querySelector('[data-modal-close]'),
  modalWindow: document.querySelector('.backdrop'),
    link: document.querySelector('.footer_link'),
  modal: document.querySelector('.footer-modal'),
}

refs.link.addEventListener('click', onCloseBtn)
refs.closeBtn.addEventListener('click', () => {
   refs.modalWindow.classList.add('is-hidden'); 
})
refs.closeBtn.addEventListener('click', onCloseBtn);
export function onCloseBtn(event) {
    refs.modalWindow.classList.remove('is-hidden');
    refs.closeBtn.removeEventListener('click', onCloseBtn);
};

document.addEventListener('keydown', onEscapeClose);
export function onEscapeClose(event) {
    

    if (event.code === 'Escape') {
    
        refs.modalWindow.classList.add('is-hidden');
    } 
    
}

window.addEventListener('click', (event) => {
    if (event.target === refs.modalWindow) {
       refs.modalWindow.classList.add('is-hidden');  
    } 
})







