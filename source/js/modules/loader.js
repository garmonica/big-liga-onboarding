const TABLET_WIDTH = 1023;

const header = document.querySelector('.header');
header.classList.add('header--loader');

const logoLink = document.querySelector('.header__logo');
logoLink.setAttribute('tabindex', -1);

const loaderText = document.querySelector('.header__text');

const intro = document.querySelector('.intro');
intro.classList.remove('intro--nojs');

if (header) {

  if (document.body.clientWidth > TABLET_WIDTH) {
    loaderText.innerText = 'Нажмите на Enter';

    const onEnterKeydown = (evt) => {
      if (evt.key === ('Enter')) {
        evt.preventDefault();
        logoLink.removeAttribute('tabindex');
        header.classList.remove('header--loader');
        intro.classList.add('intro--show');
        window.removeEventListener('keydown', onEnterKeydown);
      }
    };

    window.addEventListener('keydown', onEnterKeydown);
  }

  if (document.body.clientWidth <= TABLET_WIDTH) {
    loaderText.innerText = 'Кликните на экран';

    const onLoaderClick = (evt) => {
      evt.stopPropagation();
      header.classList.remove('header--loader');
      intro.classList.add('intro--show');
      header.removeEventListener('click', onLoaderClick);
    };

    header.addEventListener('click', onLoaderClick);
  }
}

export {TABLET_WIDTH};
