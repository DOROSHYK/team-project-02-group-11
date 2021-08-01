import teamListTemplate from '../template/teamMarkup.hbs';
import teamSliderTemplate from '../template/sliderTeamMarkup.hbs';

const refs = {
  listBtn: document.getElementById('listed'),
  descrBtn: document.getElementById('description'),
  teamlistTypeBtnsList: document.querySelector('.modal-type-list'),
  footerModal: document.querySelector('.footer-modal'),
  teamList: document.querySelector('.team-list-thumb'),
};

refs.teamlistTypeBtnsList.addEventListener('click', renderModalMarkup);

function renderModalMarkup(event) {
  if (event.target.id === 'description' || event.target.id === 'description-icon') {
      toggleBtnClass();
      appendMarkup(teamSliderTemplate);
    
  } else if (event.target.id === 'listed' || event.target.id === 'listed-icon') {
      toggleBtnClass();
      appendMarkup(teamListTemplate);
  }
}

function toggleBtnClass() {
  refs.listBtn.classList.toggle('is-active');
  refs.descrBtn.classList.toggle('is-active');
}

function appendMarkup(template) {
    refs.teamList.innerHTML = '';
    refs.teamList.insertAdjacentHTML('beforeend', template());
}
