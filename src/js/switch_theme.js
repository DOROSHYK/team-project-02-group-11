import getRefs from './get-refs';

const refs = getRefs();

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

refs.buttonTheme.addEventListener('click', switchTheme);


function switchTheme(e) {   
  
     if (!e.target.checked){
        refs.allPage.classList.add(Theme.LIGHT);
        refs.allPage.classList.remove(Theme.DARK);
        localStorage.setItem('Theme', Theme.LIGHT);
       
       refs.iconTheme.animate(
        [
          // keyframes
              { transform: 'translateY(0px)' },
              { transform: 'translateY(25px)' },
              { transform: 'translateY(50px)' },
              { transform: 'translateY(100px)' }
        ], {
              // timing options
              duration: 1000
            }
       );
       refs.iconHideTheme.animate(
        [
              { transform: 'translateY(0px)' }
        ], {
              // timing options
              duration: 1000
            }
       ) 
    }
      else {
          
         refs.allPage.classList.add(Theme.DARK);
       refs.allPage.classList.remove(Theme.LIGHT);
         localStorage.setItem('Theme', Theme.DARK);
    }
  savedTheme(); 
};

function savedTheme() {
  const saveTheme = localStorage.getItem('Theme');
  if (saveTheme) {
     refs.allPage.classList.add(saveTheme);
     if (saveTheme === Theme.DARK) {
       refs.buttonTheme.checked = true;
     }
  }
}