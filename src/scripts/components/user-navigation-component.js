import { AbstractSmartComponent } from './abstract-smart-component';

const createButtonStartGameTemplate = () => `<li class="user-navigation__item">
    <button class="button button--start-game user-navigation__button">Start game</button>
  </li>`;

const createButtonStopGameTemplate = () => `<li class="user-navigation__item">
  <button class="button button--stop-game user-navigation__button">Stop game</button>
</li>`;

const createUserNavigationLogInTemplate = () => `<ul class="user-navigation user-navigation--log-in">
    <li class="user-navigation__item">
      <button class="button button--log-in user-navigation__button">Log in</button>
    </li">
  </ul>`;

const createUserNavigationLogOutTemplate = (
  userAvatar,
  isGameStart,
) => `<ul class="user-navigation user-navigation--log-out">
    ${isGameStart ? createButtonStopGameTemplate() : createButtonStartGameTemplate()}
    <li class="user-navigation__item">
      <button class="button button--log-out button user-navigation__button">Log out</button>
    </li">
    <li class="user-navigation__item">
      <img class="user-navigation__avatar" src="${userAvatar}" alt="player's avatar" />
    </li">
  </ul>`;

const createUserNavigationTemplate = (isLogIn, userAvatar, isGameStart) =>
  `${isLogIn ? createUserNavigationLogOutTemplate(userAvatar, isGameStart) : createUserNavigationLogInTemplate()}`;

export class UserNavigationComponent extends AbstractSmartComponent {
  constructor() {
    super();

    this.isLogIn = false;
    this.isGameStart = false;
    this.userAvatar = './assets/images/no-avatar.png';
  }

  getTemplate() {
    return createUserNavigationTemplate(this.isLogIn, this.userAvatar, this.isGameStart);
  }

  recoveryListeners() {
    if (!this.isLogIn) {
      this.buttonLogInClickHandler(this._handleButtonLogInClick);
    }

    if (this.isLogIn) {
      this.buttonLogOutClickHandler(this._handleButtonLogOutClick);
    }

    if (!this.isGameStart) {
      this.buttonStartGameClickHandler(this._handleButtonStartGameClick);
    }

    if (this.isGameStart) {
      this.buttonStopGameClickHandler(this._handleButtonStopGameClick);
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
    if (this.isLogIn && !this.isGameStart) {
      this.getElement().querySelector('.button--start-game').addEventListener('click', handler);
    }
    this._handleButtonStartGameClick = handler;
  }

  buttonStopGameClickHandler(handler) {
    if (this.isLogIn && this.isGameStart) {
      this.getElement().querySelector('.button--stop-game').addEventListener('click', handler);
    }
    this._handleButtonStopGameClick = handler;
  }
}
