import { AbstractComponent } from './abstract-component';

const createPopupLogInTemplate = () => {
  const MAX_LENGTH = 30;

  return `<div class="popup-log-in">
    <p class="popup-log-in__title">Log in</p>
    <form class="popup-log-in__form">
      <fieldset class="popup-log-in__fieldset">
        <legend class="popup-log-in__legend">User's information</legend>
        <label class="popup-log-in__label">
          <span class="popup-log-in__label-text">First name</span>
          <input class="popup-log-in__input" type="text" name="first-name" placeholder="Jessie" maxlength="${MAX_LENGTH}" />
          <span class="popup-log-in__input-status-error"></span>
        </label>
        <label class="popup-log-in__label">
          <span class="popup-log-in__label-text">Last name</span>
          <input class="popup-log-in__input" type="text" name="last-name" placeholder="Doe" maxlength="${MAX_LENGTH}" />
          <span class="popup-log-in__input-status-error"></span>
        </label>
        <label class="popup-log-in__label">
          <span class="popup-log-in__label-text">E-mail</span>
          <input class="popup-log-in__input" type="email" name="email" placeholder="jessie.doe@gmail.com" maxlength="${MAX_LENGTH}" />
          <span class="popup-log-in__input-status-error"></span>
        </label>
      </fieldset>
      <fieldset class="popup-log-in__fieldset--avatar">
        <legend class="popup-log-in__legend--avatar">User's avatar</legend>
        <input class="popup-log-in__input--avatar" id="avatar" type="file" />
        <label class="popup-log-in__label--avatar" for="avatar"></label>
        <img class="popup-log-in__avatar" src="./assets/images/no-avatar.png" alt="player's avatar" />
      </fieldset>
      <div class="popup-log-in__wrapper">
        <button class="button button--v2 popup-log-in__button" type="submit">Log in</button>
        <button class="button popup-log-in__button" type="reset">Cancel</button>
      </div>
    </form>
  </div>`;
};

export class PopupLogInComponent extends AbstractComponent {
  constructor() {
    super();
    this.firstNameInput = this.getElement().querySelector('.popup-log-in__input');

    this._userAvatar = './assets/images/no-avatar.png';

    this._isValidateFirstName = false;
    this._isValidateLastName = false;
    this._isValidateEmail = false;

    this._isLogIn = false;
  }

  getTemplate() {
    return createPopupLogInTemplate();
  }

  inputFirstNameHandler() {
    this.getElement()
      .querySelector('.popup-log-in__input[name="first-name"]')
      .addEventListener('input', (event) => {
        const inputValue = event.target.value;
        const inputAttributeName = event.target.getAttribute('name');

        this._isValidateFirstName = this._checkInputTypeTextIsValidate(inputValue, inputAttributeName);
      });
  }

  inputLastNameHandler() {
    this.getElement()
      .querySelector('.popup-log-in__input[name="last-name"]')
      .addEventListener('input', (event) => {
        const inputValue = event.target.value;
        const inputAttributeName = event.target.getAttribute('name');

        this._isValidateLastName = this._checkInputTypeTextIsValidate(inputValue, inputAttributeName);
      });
  }

  inputEmailHandler() {
    this.getElement()
      .querySelector('.popup-log-in__input[name="email"]')
      .addEventListener('input', (event) => {
        const inputValue = event.target.value;
        const inputAttributeName = event.target.getAttribute('name');

        this._isValidateEmail = this._checkInputTypeEmailIsValidate(inputValue, inputAttributeName);
      });
  }

  inputAvatarHandler() {
    this.getElement()
      .querySelector('.popup-log-in__input--avatar')
      .addEventListener('input', (event) => {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          this._userAvatar = reader.result;
          this.getElement().querySelector('.popup-log-in__avatar').src = this._userAvatar;
        };
      });
  }

  buttonSubmitClickHandler(handler) {
    this.getElement()
      .querySelector('.button[type="submit"]')
      .addEventListener('click', (event) => {
        event.preventDefault();
        const isValidateForm = this._isValidateFirstName && this._isValidateLastName && this._isValidateEmail;

        if (isValidateForm) {
          this._isLogIn = true;
          handler(this._isLogIn, this._userAvatar);
        }
      });
  }

  buttonResetClickHandler() {
    this.getElement()
      .querySelector('.button[type="reset"]')
      .addEventListener('click', () => {
        this.getElement()
          .querySelectorAll('.popup-log-in__input + span')
          .forEach((span) => {
            span.classList.remove('popup-log-in__input-status-success');
            span.classList.add('popup-log-in__input-status-error');
          });

        this._userAvatar = './assets/images/no-avatar.png';
        this.getElement().querySelector('.popup-log-in__avatar').src = this._userAvatar;

        this._isValidateFirstName = false;
        this._isValidateLastName = false;
        this._isValidateEmail = false;
      });
  }

  _checkInputTypeTextIsValidate(value, inputName) {
    const inputStatusElement = this.getElement().querySelector(`.popup-log-in__input[name="${inputName}"] + span`);
    if (!this._checkStringIsEmpty(value) && this._checkStringIsLetters(value) && this._checkStringIsNotNumbers(value)) {
      inputStatusElement.className = 'popup-log-in__input-status-success';
      return true;
    }
    inputStatusElement.className = 'popup-log-in__input-status-error';
    return false;
  }

  _checkInputTypeEmailIsValidate(value, inputName) {
    const inputStatusElement = this.getElement().querySelector(`.popup-log-in__input[name="${inputName}"] + span`);
    if (!this._checkStringIsEmpty(value) && this._checkStringIsRightEmail(value)) {
      inputStatusElement.className = 'popup-log-in__input-status-success';
      return true;
    }
    inputStatusElement.className = 'popup-log-in__input-status-error';
    return false;
  }

  _checkStringIsEmpty(string) {
    return string === '';
  }

  _checkStringIsLetters(string) {
    return /^[\p{Alpha}\p{M}\p{Nd}\p{Join_C}]+$/gu.test(string);
  }

  _checkStringIsNotNumbers(string) {
    return /^\D+$/g.test(string);
  }

  _checkStringIsRightEmail(string) {
    return /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(
      string,
    );
  }
}
