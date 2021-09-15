const TABLET_WIDTH = 1023;

const header = document.querySelector('.header');
const loaderText = document.querySelector('.header__text');
const introHeading = document.querySelector('.intro__heading');
const details = document.querySelector('.details');

header.classList.add('header--loader');

if (document.body.clientWidth > TABLET_WIDTH) {
  loaderText.innerText = 'Нажмите на Enter';
  const onEnterKeydown = (evt) => {
    if (evt.key === ('Enter')) {
      evt.preventDefault();
      header.classList.remove('header--loader');
      header.classList.add('header--closed');

      introHeading.classList.add('intro__heading--opened');
      details.classList.add('details--opened');
      window.removeEventListener('keydown', onEnterKeydown);
    }
  };

  window.addEventListener('keydown', onEnterKeydown);
}
