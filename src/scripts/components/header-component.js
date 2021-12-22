import { AbstractComponent } from './abstract-component';

const createHeaderTemplate = () => `<header class="header">
    <img class="header__logo" src="./assets/icons/logo.svg" alt="logo" width="80" height="40" />
    <nav class="header__navigation"></nav>
    <button class="button-burger header__button-burger">
      <span class="button-burger__line"></span>
    </button>
  </header>`;

export class HeaderComponent extends AbstractComponent {
  constructor() {
    super();
    this.navigation = this.getElement().querySelector('.header__navigation');
  }

  getTemplate() {
    return createHeaderTemplate();
  }
}
