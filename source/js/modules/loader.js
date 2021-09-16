const TABLET_WIDTH = 1023;

const header = document.querySelector('.header');
header.classList.add('header--loader');

const loader = document.querySelector('.header--loader');
const loaderText = document.querySelector('.header__text');
const introHeading = document.querySelector('.intro__heading');
const details = document.querySelector('.details');

const logoLink = document.querySelector('.header__logo');
logoLink.setAttribute('tabindex', -1);

if (document.body.clientWidth > TABLET_WIDTH) {
  if (loader) {
    loaderText.innerText = 'Нажмите на Enter';

    const onEnterKeydown = (evt) => {
      if (evt.key === ('Enter')) {
        evt.preventDefault();
        logoLink.removeAttribute('tabindex');
        header.classList.remove('header--loader');
        introHeading.classList.add('intro__heading--animated');
        details.classList.add('details--animated');
        window.removeEventListener('keydown', onEnterKeydown);
      }
    };
    window.addEventListener('keydown', onEnterKeydown);
  }
}

if (document.body.clientWidth <= TABLET_WIDTH) {
  loaderText.innerText = 'Кликните на экран';

  if (loader) {
    const onLoaderClick = (evt) => {
      evt.stopPropagation();
      header.classList.remove('header--loader');
      introHeading.classList.add('intro__heading--animated');
      loader.removeEventListener('click', onLoaderClick);
    };
    loader.addEventListener('click', onLoaderClick);
  }

  if (details) {
    details.classList.remove('details--nojs');
    window.addEventListener('click', (evt) => {
      if (evt.target.closest('.header__logo')) {
        return;
      }
      details.classList.toggle('details--slide');
    });
  }
}
