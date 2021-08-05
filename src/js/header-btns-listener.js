import getRefs from './get-refs';
import Local from './LocalStorage';
import cardImage from '../template/filmCardShot';
import renderLibraryPage from './changePage';

const loc = new Local();
let refs = getRefs();


refs.headerBtnWrap.addEventListener('click', onMyLibrary);

function onMyLibrary(e) {
      let someDate = loc.getWatched();
    if (e.target.textContent === 'Watched') {
        refs.headerBtns[0].classList.add('button--current');
        refs.headerBtns[1].classList.remove('button--current');
        if (loc.getWatched().length === 0) {
            return;
      }
      someDate = loc.getWatched();
      
  }   

    else if (e.target.textContent === 'Queue') {
        refs.headerBtns[1].classList.add('button--current');
        refs.headerBtns[0].classList.remove('button--current');
        if (loc.getQueue().length === 0) {
            return;
        }
      someDate = loc.getQueue();
     
    }
    
    setTimeout(() => {
        renderLibraryPage(someDate);
    }, 0)
};