import getRefs from './get-refs';
const refs = getRefs();


refs.footerModalOpener.addEventListener('click', onOpenTeamModal);

function onOpenTeamModal(){
    refs.footerModal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
    refs.footerModal.addEventListener('click', closeFooterModal);
    document.addEventListener('keydown', onEscapeClose);
    refs.iconTheme.style.zIndex = -1;
};

export function onEscapeClose(event) {
    if (event.code === 'Escape') {
        hideModal();
        document.body.style.overflow = 'auto';
    } 
}

function closeFooterModal(event) {
    onCloseFooterBtnClick(event);
    onFooterBackdropClick(event);
}

function onCloseFooterBtnClick(event) {
    if (event.target.classList.contains('close-footer-modal-js') || event.target.classList.contains('js-close-footer-modal-icon')) {
        hideModal();
        removeListeners();
    }    
};


function onFooterBackdropClick(event) {
    if (!event.target.classList.contains('js-footer-backdrop')) {
        return;
    }
    hideModal();
    removeListeners();
}

function removeListeners() {
    document.removeEventListener('keydown', onEscapeClose);
    refs.footerModal.removeEventListener('click', closeFooterModal);
    document.body.style.overflow = 'auto';
}

function hideModal() {
    refs.footerModal.classList.add('is-hidden');
    //refs.movieModal.classList.add('is-hidden');
    refs.iconTheme.style.zIndex = 1;
}

//movieModal

export function addMovieModalListener() {
    refs.movieModal.addEventListener('click', closeMovieModal);
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onEscapeMovieClose);
    refs.closeModalButton.addEventListener('click', closeMovieModal)
}

function closeMovieModal(event) {
    onCloseMovieBtnClick(event);
    onMovieBackdropClick(event);
}

function onEscapeMovieClose(event) {
        if (event.code === 'Escape') {
        hideMovieModal();
        document.body.style.overflow = 'auto';
    } 
}

function onCloseMovieBtnClick(event) {

    //if (event.target.classList.contains('close-movie-modal-js')) { //|| event.target.classList.contains('js-close-movie-modal-icon')) {
        hideMovieModal();
        //removeMovieListeners();
        
        // document.querySelector('#add-watched').textContent = "Add to watched";
        // document.querySelector('#add-watched').className = "add-to-watched add-button uppercase";
        // console.log(document.querySelector('#add-watched').className)
        // document.querySelector('#add-queue').textContent = "Add to queue";
        // document.querySelector('#add-queue').className = "add-button add-to-queue uppercase";
        
    //}
}

function hideMovieModal() {
    
    refs.movieModal.classList.add('is-hidden');

}

function removeMovieListeners() {
    document.removeEventListener('keydown', onEscapeMovieClose);
    refs.movieModal.removeEventListener('click', closeMovieModal);
    document.body.style.overflow = 'auto';
}

function onMovieBackdropClick(event) {
    // if (!event.target.classList.contains('js-movie-backdrop')) {
    //     return;
    // }
    hideMovieModal();
   removeMovieListeners();
}





