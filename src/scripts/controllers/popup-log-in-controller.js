import { PopupLogInComponent } from '../components/popup-login-in-component';
import { renderComponent } from '../utils/component';

export class PopupLogInController {
  constructor(container, onSuccessLogIn) {
    this._container = container;
    this._onSuccessLogIn = onSuccessLogIn;

    this._popupLogInComponent = new PopupLogInComponent();

    this._handleButtonSubmitClick = this._handleButtonSubmitClick.bind(this);
  }

  init() {
    renderComponent(this._container, this._popupLogInComponent);

    this._popupLogInComponent.firstNameInput.focus();

    this._popupLogInComponent.inputFirstNameHandler();
    this._popupLogInComponent.inputLastNameHandler();
    this._popupLogInComponent.inputEmailHandler();
    this._popupLogInComponent.inputAvatarHandler();
    this._popupLogInComponent.buttonSubmitClickHandler(this._handleButtonSubmitClick);
    this._popupLogInComponent.buttonResetClickHandler();
  }

  destroy() {
    this._popupLogInComponent.getElement().remove();
  }

  _handleButtonSubmitClick(isLogIn, player) {
    this._onSuccessLogIn(isLogIn, player);
  }
}
