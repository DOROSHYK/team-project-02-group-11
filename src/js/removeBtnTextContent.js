import getRefs from './get-refs';


export default function onClickAddOrRemoveBtn(e) {
  
    if (e.target.textContent === 'Add to watched') {
        e.target.classList.add('remove-from-watched');
        e.target.classList.remove('add-to-watched');
        e.target.textContent = 'Remove watched';
    }

    else if (e.target.textContent === 'Add to queue') {
        e.target.classList.add('remove-from-queue');
        e.target.classList.remove('add-to-queue');
        e.target.textContent = 'Remove queue';
    }

    else if (e.target.textContent === 'Remove queue') {
        e.target.classList.add('add-to-queue');
        e.target.classList.remove('remove-from-queue');
        e.target.textContent = 'Add to queue';
    }

    else if (e.target.textContent === 'Remove watched') {
        e.target.classList.add('add-to-watched');
        e.target.classList.remove('remove-from-watched');
        e.target.textContent = 'Add to watched';
    }
}

const refs = getRefs();

refs.mainRef.addEventListener('click', onClickAddOrRemoveBtn);
refs.movieModalBtn.addEventListener('click', onClickAddOrRemoveBtn);