import cardImage from '../temptate/filmcardModal';

export default function createCard(someWords) {

    if (someWords.total !== 0) {
       const resultImages = someWords.results.map((result, i) => {
            return cardImage(result);
        }).join('');

        document.querySelector('.gallery').insertAdjacentHTML('beforeend', resultImages);
         
        return;
    }
    
}