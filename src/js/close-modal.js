import getRefs from './get-refs';
const refsMod = getRefs();

const refs = {
        closeBtn: document.querySelector('[data-modal-close]'),
    modalWindow: document.querySelector('[data-modal]'),
        link: document.querySelector('[data-modal-open]'),
    //   modal: document.querySelector('.footer-modal'),
};


// FOR FOOTER MODAL
refsMod.footerModalOpener.addEventListener('click',onOpenTeamModal);

function onOpenTeamModal(){
    refsMod.footerModal.classList.remove('is-hidden');
    refsMod.footerModalOpener.removeEventListener('click',onOpenTeamModal);
};

refsMod.footerCloseModalBtn.addEventListener('click', onCloseFooterBtn);

function onCloseFooterBtn(){
    refsMod.footerModal.classList.add('is-hidden');
    refsMod.footerCloseModalBtn.removeEventListener('click', onCloseFooterBtn);
};
// FOR FOOTER MODAL

// refs.link.addEventListener('click', onCloseBtn)



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







