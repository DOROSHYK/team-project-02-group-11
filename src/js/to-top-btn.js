import getRefs from './get-refs';

const refs = getRefs();

refs.toTopBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    refs.ancor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    refs.toTopBtn.classList.add('visually-hidden');
});