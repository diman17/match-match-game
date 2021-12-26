import { PopupLogInComponent } from '../components/popup-login-in-component';
import { renderComponent } from '../utils/common';

export class PopupLogInController {
  constructor(container) {
    this._container = container;

    this._popupLogInComponent = new PopupLogInComponent();
  }

  init() {
    renderComponent(this._container, this._popupLogInComponent);

    this._popupLogInComponent.firstNameInput.focus();
  }

  hide() {
    this._popupLogInComponent.getElement().remove();
  }
}
