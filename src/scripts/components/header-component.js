import { AbstractComponent } from './abstract-component';

const createHeaderTemplate = () => `<header class="header">
    <div class="header-wrapper">
      <img class="header__logo" src="./assets/icons/logo.svg" alt="logo" width="80" height="40" />
      <button class="button-burger header__button-burger">
        <span class="button-burger__line"></span>
      </button>
    </div>
    <nav class="header__navigation"></nav>
  </header>`;

export class HeaderComponent extends AbstractComponent {
  constructor() {
    super();
    this.navigationElement = this.getElement().querySelector('.header__navigation');
  }

  getTemplate() {
    return createHeaderTemplate();
  }

  buttonBurgerClickHandler() {
    this.getElement()
      .querySelector('.button-burger')
      .addEventListener('click', (event) => {
        const { currentTarget } = event;
        if (!currentTarget.classList.contains('button-burger--close')) {
          currentTarget.classList.add('button-burger--close');
          this.getElement().classList.add('navigation-show');
        } else {
          currentTarget.classList.remove('button-burger--close');
          this.getElement().classList.remove('navigation-show');
        }
      });
  }
}
