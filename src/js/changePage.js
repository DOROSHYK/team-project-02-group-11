import getRefs from './get-refs';
import Local from './LocalStorage';
import cardImage from '../template/filmCardShot';

 const refs = getRefs();

refs.siteNavigation.addEventListener('click', onHeaderLinkClick);

const loc = new Local();


// const removeBtnsTextContent = async () => {
                   
//  getRefs().addToQueueBtnsFilmCard.forEach((btn) => {
//     btn.textContent = 'Remove queue';
// });
//  getRefs().addToWatchedBtnsFilmCard.forEach((btn) => {
//     btn.textContent = 'Remove watched';
// });
// };
               
export default function renderLibraryPage(date) {
    
    getRefs().library.innerHTML = '';
               
    const resultLibrary = date.map(el => {
        let genresArr = el.genres.split(', ');
        if (genresArr.length > 2) {
            el.genres = genresArr.splice(0, 2).join(', ') + ", Other"
        };
    
        return cardImage(el)
    }).join('');
    getRefs().library.insertAdjacentHTML('beforeend', resultLibrary);
        // //removeBtnsTextContent();
}


function removeElementClass() {
    refs.navLinks.forEach((link) => {
    link.classList.remove('site-nav__link--current');
    })

    refs.headerBtnWrap.classList.remove('hide');
    refs.headerInputWrap.classList.remove('hide');
    refs.header.classList.remove('header-home');
    refs.header.classList.remove('header-library');
}


function changeLibraryList() {
    let someDate = loc.getWatched();
             
            if (loc.getWatched().length === 0 && loc.getQueue().length > 0) {
                someDate = loc.getQueue();
                refs.headerBtns[1].classList.add('button--current');
                refs.headerBtns[0].classList.remove('button--current');
                document.body.querySelector('#add-watched').style.display = 'none';
           } else {
                someDate = loc.getWatched();
                document.body.querySelector('#add-queue').style.display = 'none';
           }
           setTimeout(() => {
               renderLibraryPage(someDate);   
           }, 0)
}


function onHeaderLinkClick(event) {
    if (event.target.classList.contains('header-link')) {
       if (event.target.textContent === 'My library') {
           removeElementClass()
           
            refs.sectionHome.classList.add('hide');
            refs.sectionLibrary.classList.remove('hide');
            refs.navLinks[2].classList.add('site-nav__link--current');
            refs.header.classList.add('header-library');
            refs.headerInputWrap.classList.add('hide');
           
            changeLibraryList()
       }
       else if (event.target.textContent === 'Home'){
            removeElementClass()
           refs.header.classList.add('header-home');
           refs.navLinks[1].classList.add('site-nav__link--current');
           document.body.querySelector('#add-watched').style.display = 'block';
           document.body.querySelector('#add-queue').style.display = 'block';
           document.body.querySelector('#add-watched').className = 'add-to-watched watched add-button uppercase';
           document.body.querySelector('#add-queue').className = 'add-button add-to-queue queue uppercase';
           refs.sectionHome.classList.remove('hide');
           refs.sectionLibrary.classList.add('hide');
           refs.headerBtnWrap.classList.add('hide');
        }
    }
}