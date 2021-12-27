import { AbstractSmartComponent } from './abstract-smart-component';

const createUserNavigationLogInTemplate = () => `<ul class="user-navigation user-navigation--log-in">
    <li class="user-navigation__item">
      <button class="button button--log-in user-navigation__button">Log in</button>
    </li">
  </ul>`;

const createUserNavigationLogOutTemplate = (userAvatar) => `<ul class="user-navigation user-navigation--log-out">
    <li class="user-navigation__item">
      <button class="button button--start-game user-navigation__button">Start game</button>
    </li>
    <li class="user-navigation__item">
      <button class="button button--log-out button user-navigation__button">Log out</button>
    </li">
    <li class="user-navigation__item">
      <img class="user-navigation__avatar" src="${userAvatar}" alt="player's avatar" />
    </li">
  </ul>`;

const createUserNavigationTemplate = (isLogIn, userAvatar) =>
  `${isLogIn ? createUserNavigationLogOutTemplate(userAvatar) : createUserNavigationLogInTemplate()}`;

export class UserNavigationComponent extends AbstractSmartComponent {
  constructor() {
    super();
    this.isLogIn = false;
    this.userAvatar = './assets/images/no-avatar.png';
  }

  getTemplate() {
    return createUserNavigationTemplate(this.isLogIn, this.userAvatar);
  }

  recoveryListeners() {
    if (!this.isLogIn) {
      this.buttonLogInClickHandler(this._handleButtonLogInClick);
    }

    if (this.isLogIn) {
      this.buttonLogOutClickHandler(this._handleButtonLogOutClick);
      this.buttonStartGameClickHandler(this._handleButtonStartGameClick);
    }
  }

  buttonLogInClickHandler(handler) {
    if (!this.isLogIn) {
      this.getElement().querySelector('.button--log-in').addEventListener('click', handler);
    }
    this._handleButtonLogInClick = handler;
  }

  buttonLogOutClickHandler(handler) {
    if (this.isLogIn) {
      this.getElement().querySelector('.button--log-out').addEventListener('click', handler);
    }
    this._handleButtonLogOutClick = handler;
  }

  buttonStartGameClickHandler(handler) {
    if (this.isLogIn) {
      this.getElement().querySelector('.button--start-game').addEventListener('click', handler);
    }
    this._handleButtonStartGameClick = handler;
  }
}
