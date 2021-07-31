
import cardImage from '../template/filmCardShot';
import ServerAPI from './serverAPI';
import getRefs from './get-refs';

const refs = getRefs();
const API = new ServerAPI;

let resultImages;

export default function createCard(someWords) {

    if (someWords.length !== 0) {

        resultImages = someWords.results.map(result => {
             
            let some = API.getObjectForRender(result); // или одной  строкой?
            return   cardImage(some);
        
       } )
    } 
    
        refs.popFilmList.classList.add('visually-hidden');
        refs.gallery.insertAdjacentHTML('beforeend', resultImages);
            
}
    




