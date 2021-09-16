import {TABLET_WIDTH} from './loader';

const details = document.querySelector('.details');

if (document.body.clientWidth <= TABLET_WIDTH && details) {
  document.body.addEventListener('click', (evt) => {
    if (evt.target.closest('.header__logo')) {
      return;
    }
    details.classList.toggle('details--slide');
  });
}
