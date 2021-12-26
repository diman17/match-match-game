import { HeaderComponent } from '../components/header-component';
import { PageNavigationComponent } from '../components/page-navigation-component';
import { UserNavigationComponent } from '../components/user-navigation-component';
import { PopupLogInComponent } from '../components/popup-login-in-component';
import { OverlayComponent } from '../components/overlay-component';
import { removeComponent, renderComponent } from '../utils/common';

export class HeaderController {
  constructor(container, router) {
    this._container = container;
    this._router = router;

    this._headerComponent = new HeaderComponent();
    this._pageNavigationComponent = new PageNavigationComponent(this._router.routes);
    this._userNavigationComponent = new UserNavigationComponent();
    this._popupLogInComponent = new PopupLogInComponent();

    this._router.pageLinkElements = this._pageNavigationComponent.pageLinkElements;

    this._handleButtonClick = this._handleButtonClick.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
  }

  init() {
    renderComponent(this._container, this._headerComponent);
    renderComponent(this._headerComponent.navigationElement, this._pageNavigationComponent);
    renderComponent(this._headerComponent.navigationElement, this._userNavigationComponent);

    this._router.init();

    this._headerComponent.buttonBurgerClickHandler();
    this._pageNavigationComponent.navigationClickHandler();
    this._userNavigationComponent.buttonClickHandler(this._handleButtonClick);
  }

  _handleButtonClick() {
    this._overlayComponent = new OverlayComponent();
    this._overlayComponent.overlayClickHandler(this._handleOverlayClick);

    this._showPopupLogIn();
  }

  _handleOverlayClick() {
    this._hidePopupLogIn();
  }

  _showPopupLogIn() {
    renderComponent(this._container, this._overlayComponent);
    renderComponent(this._container, this._popupLogInComponent);

    this._popupLogInComponent.firstNameInput.focus();
  }

  _hidePopupLogIn() {
    removeComponent(this._overlayComponent);
    this._popupLogInComponent.getElement().remove();
  }
}
