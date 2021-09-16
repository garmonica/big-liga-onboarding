import {TABLET_WIDTH} from './loader';

const details = document.querySelector('.details');

if (document.body.clientWidth <= TABLET_WIDTH && details) {
  const onScreenClick = (evt) => {
    if (evt.target.closest('.header__logo')) {
      return;
    }
    details.classList.toggle('details--slide');
  };

  window.addEventListener('click', onScreenClick);
  window.addEventListener('touchmove', onScreenClick);
}
