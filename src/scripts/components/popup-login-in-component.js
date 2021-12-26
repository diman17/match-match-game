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
          <input class="popup-log-in__input" type="text" placeholder="Jessie" maxlength="${MAX_LENGTH}" />
          <span class="popup-log-in__input-status"></span>
        </label>
        <label class="popup-log-in__label">
          <span class="popup-log-in__label-text">Last name</span>
          <input class="popup-log-in__input" type="text" placeholder="Doe" maxlength="${MAX_LENGTH}" />
          <span class="popup-log-in__input-status"></span>
        </label>
        <label class="popup-log-in__label">
          <span class="popup-log-in__label-text">E-mail</span>
          <input class="popup-log-in__input" type="email" placeholder="jessie.doe@gmail.com" maxlength="${MAX_LENGTH}" />
          <span class="popup-log-in__input-status"></span>
        </label>
      </fieldset>
      <fieldset class="popup-log-in__fieldset--avatar">
        <legend class="popup-log-in__legend--avatar">User's avatar</legend>
        <label class="popup-log-in__label--avatar" for="avatar"></label>
        <input class="popup-log-in__input--avatar" id="avatar" type="file" />
        <img class="popup-log-in__avatar" src="./assets/images/no-avatar.png" alt="player's avatar" />
      </fieldset>
      <div class="popup-log-in__wrapper">
        <button class="button button--v2 popup-log-in__button" type="submit">Add user</button>
        <button class="button popup-log-in__button" type="reset">Cancel</button>
      </div>
    </form>
  </div>`;
};

export class PopupLogInComponent extends AbstractComponent {
  getTemplate() {
    return createPopupLogInTemplate();
  }
}
