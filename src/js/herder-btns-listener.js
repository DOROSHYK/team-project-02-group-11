import getRefs from './get-refs';
import Local from './LocalStorage';
import cardImage from '../template/filmCardShot';

const loc = new Local();
let refs = getRefs();
let someDate = loc.getWatched();

refs.headerBtnWrap.addEventListener('click', onMyLibrary);

function onMyLibrary(e) {

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
        const refs = getRefs();
        refs.library.innerHTML = '';
               const resultLibrary = someDate.map(el => cardImage(el)).join('');
               refs.library.insertAdjacentHTML('beforeend', resultLibrary);
    }, 0)
};