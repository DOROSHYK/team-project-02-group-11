import getRefs from './get-refs';

const refs = getRefs();

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

refs.buttonTheme.addEventListener('click', switchTheme);


function switchTheme(e) {   
<<<<<<< Updated upstream
  
     if (!e.target.checked){
=======
    refs = getRefs();
     if (e.target.checked){
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  savedTheme(); 
=======
   savedTheme(); 
>>>>>>> Stashed changes
};

function savedTheme() {
  const saveTheme = localStorage.getItem('Theme');
  if (saveTheme) {
     refs.allPage.classList.add(saveTheme);
<<<<<<< Updated upstream
     if (saveTheme === Theme.DARK) {
       refs.buttonTheme.checked = true;
     }
=======
      if (saveTheme === Theme.DARK) {
       refs.buttonTheme.checked = true;
      
    }
    

>>>>>>> Stashed changes
  }

  savedTheme(); 
}