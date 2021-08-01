import getRefs from './get-refs';

const refs = getRefs();

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

document.querySelector('.theme-switch__control').addEventListener('click', switchTheme);


function switchTheme(e) {   
  
     if (!e.target.checked){
        refs.allPage.classList.add(Theme.LIGHT);
        refs.allPage.classList.remove(Theme.DARK);
       localStorage.setItem('Theme', Theme.LIGHT);
       
      document.querySelector(".theme-switch__track").animate([
          // keyframes
              {
                transform: 'translateY(0px)'
                    },
                      {
                transform: 'translateY(25px)'
                    },
              {
                transform: 'translateY(50px)'
              },

              {
                transform: 'translateY(100px)'
                    }
        ], {
          // timing options
          duration: 1000,
        // iterations: Infinity
      });
       document.querySelector(".theme-switch__icon_hiden").animate([
           {
                transform: 'translateY(0px)'
         }],{
          // timing options
          duration: 1000,
        // iterations: Infinity
      })
         
       
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