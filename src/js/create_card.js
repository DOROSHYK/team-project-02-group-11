
import cardImage from '../template/filmCardShot';
import ServerAPI from './serverAPI';
import getRefs from './get-refs';
import toastr from 'toastr';
import notification from './notifications.js';

const API = new ServerAPI;

let resultImages;

export default function createCard(someWords) {
    if (!someWords) return
    const refs = getRefs();
    refs.popFilmList.classList.add('visually-hidden');
   
    resultImages = someWords.results.map(result => {
        let some = API.getObjectForRender(result); // или одной  строкой?
        return cardImage(some);
    }).join('');

    refs.gallery.insertAdjacentHTML('beforeend', resultImages);
    
    if (someWords.total_results === 0) {
      notification.incorrectRequest();
    } else {
        toastr["success"](`Succes. Found ${someWords.total_results} movies`);
    }
    } 
    
export {createCard }





