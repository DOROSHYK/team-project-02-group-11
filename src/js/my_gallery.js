import getRefs from './get-refs';
import Local from './LocalStorage';
import cardImage from '../template/filmCardShot';

const loc = new Local();
let refs = getRefs();
let someDate = loc.getWatched();

refs.headerBtnWrap.addEventListener('click', onMyLibrary);

function onMyLibrary(e) {
  refs = getRefs();
  refs.clientGallery.innerHTML = '';
  console.log(someDate);

  if (e.target.textContent === 'Queue') {
      someDate = loc.getQueue();
  }
 
    let resultLibrary = someDate.map(el => cardImage(el)).join(''); 
    refs.clientGallery.insertAdjacentHTML('beforeend', resultLibrary);

};

export default function onLoadLibrary() {

  refs = getRefs();
  console.log('worked');
  console.log(someDate);

  let resultLibrary = someDate.map(el => cardImage(el)).join('');

  console.log(resultLibrary);
  
  document.querySelector('#app').insertAdjacentHTML('beforeend', resultLibrary);
  

};








