import cardImage from '../template/filmCardShot';
import ServerAPI from './serverAPI';
import getRefs from './get-refs';

const refs = getRefs();
const API = new ServerAPI;

export default function createCard(someWords) {

    if (someWords.total !== 0) {
       const resultImages = someWords.results.map((result, i) => {
            return cardImage(result);
        }).join('');

        document.querySelector('.gallery').insertAdjacentHTML('beforeend', resultImages);
         
        return;
    }
    
}