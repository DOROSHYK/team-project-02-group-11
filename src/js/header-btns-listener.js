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
      someDate = loc.getWatched();
      refs.headerBtns[0].classList.add('button--current');
      refs.headerBtns[1].classList.remove('button--current');
  }   

  else if (e.target.textContent === 'Queue') {
      someDate = loc.getQueue();
      refs.headerBtns[1].classList.add('button--current');
      refs.headerBtns[0].classList.remove('button--current');
    }
    
    setTimeout(() => {
        renderLibraryPage(someDate);
    }, 0)
};