import { AbstractComponent } from './abstract-component';

const createHeaderTemplate = () => `<header class="header">
    <h1 class="header__title">Match Match Game</h1>
    <div class="header__wrapper">
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

  outerClickHandler(container) {
    container.addEventListener('click', (event) => {
      const headerHeight = this.getElement().offsetHeight;
      const navHeight = this.getElement().querySelector('.header__navigation').offsetHeight;

      if (this.getElement().classList.contains('navigation-show') && event.clientY > headerHeight + navHeight) {
        const rootContainer = event.path[event.path.length - 5] || container;

        if (rootContainer.classList.contains('overlay') || rootContainer.classList.contains('popup-log-in')) return;

        this.getElement().querySelector('.button-burger').click();
      }
    });
  }
}
