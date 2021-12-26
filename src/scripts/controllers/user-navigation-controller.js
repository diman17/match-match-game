import { OverlayComponent } from '../components/overlay-component';
import { UserNavigationComponent } from '../components/user-navigation-component';
import { removeComponent, renderComponent } from '../utils/common';
import { PopupLogInController } from './popup-log-in-controller';

export class UserNavigationController {
  constructor(container, rootContainer) {
    this._container = container;
    this._rootContainer = rootContainer;

    this._userNavigationComponent = new UserNavigationComponent();

    this._popupLogInController = new PopupLogInController(this._rootContainer);

    this._handleButtonLogInClick = this._handleButtonLogInClick.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
  }

  init() {
    renderComponent(this._container, this._userNavigationComponent);

    this._userNavigationComponent.buttonLogInClickHandler(this._handleButtonLogInClick);
  }

  _handleButtonLogInClick() {
    this._overlayComponent = new OverlayComponent();
    this._overlayComponent.overlayClickHandler(this._handleOverlayClick);

    this._showPopupLogIn();
  }

  _handleOverlayClick() {
    this._hidePopupLogIn();
  }

  _showPopupLogIn() {
    renderComponent(this._rootContainer, this._overlayComponent);

    this._popupLogInController.init();
  }

  _hidePopupLogIn() {
    removeComponent(this._overlayComponent);

    this._popupLogInController.hide();
  }
}
