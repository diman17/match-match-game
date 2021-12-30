import { OverlayComponent } from '../components/overlay-component';
import { UserNavigationComponent } from '../components/user-navigation-component';
import { removeComponent, renderComponent } from '../utils/common';
import { PopupLogInController } from './popup-log-in-controller';

export class UserNavigationController {
  constructor(container, rootContainer, model, onLogOut, stopGame) {
    this._container = container;
    this._rootContainer = rootContainer;
    this._model = model;
    this._onLogOut = onLogOut;
    this._onStopGame = stopGame;

    this._userNavigationComponent = new UserNavigationComponent();

    this._onSuccessLogIn = this._onSuccessLogIn.bind(this);
    this._popupLogInController = new PopupLogInController(this._rootContainer, this._onSuccessLogIn);

    this._handleButtonLogInClick = this._handleButtonLogInClick.bind(this);
    this._handleButtonLogOutClick = this._handleButtonLogOutClick.bind(this);
    this._handleButtonStartGameClick = this._handleButtonStartGameClick.bind(this);
    this._handleButtonStopGameClick = this._handleButtonStopGameClick.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleEscKeyDown = this._handleEscKeyDown.bind(this);
  }

  init() {
    renderComponent(this._container, this._userNavigationComponent);

    this._userNavigationComponent.buttonLogInClickHandler(this._handleButtonLogInClick);
    this._userNavigationComponent.buttonLogOutClickHandler(this._handleButtonLogOutClick);
    this._userNavigationComponent.buttonStartGameClickHandler(this._handleButtonStartGameClick);
    this._userNavigationComponent.buttonStopGameClickHandler(this._handleButtonStopGameClick);
  }

  _handleButtonLogInClick() {
    this._overlayComponent = new OverlayComponent();
    this._overlayComponent.overlayClickHandler(this._handleOverlayClick);

    this._showPopupLogIn();
  }

  _handleButtonLogOutClick() {
    this._userNavigationComponent.isLogIn = false;
    this._userNavigationComponent.isGameStart = false;
    this._userNavigationComponent.rerender();
    this._onLogOut();
  }

  _handleButtonStartGameClick() {
    const settings = this._model.getSettings();

    if (!settings.gameCards) {
      console.log('choose game cards');
      return;
    }

    if (!settings.difficulty) {
      console.log('choose difficulty');
      return;
    }

    this._changeButtonStartGame();
    console.log('start game');
  }

  _changeButtonStartGame() {
    this._userNavigationComponent.isGameStart = true;
    this._userNavigationComponent.rerender();
  }

  _handleButtonStopGameClick() {
    this._onStopGame();
    this._changeButtonStopGame();
  }

  _changeButtonStopGame() {
    this._userNavigationComponent.isGameStart = false;
    this._userNavigationComponent.rerender();
  }

  _handleOverlayClick() {
    this._hidePopupLogIn();
  }

  _showPopupLogIn() {
    renderComponent(this._rootContainer, this._overlayComponent);

    this._popupLogInController.init();

    document.addEventListener('keydown', this._handleEscKeyDown);
  }

  _hidePopupLogIn() {
    removeComponent(this._overlayComponent);

    this._popupLogInController.hide();

    document.removeEventListener('keydown', this._handleEscKeyDown);
  }

  _handleEscKeyDown(event) {
    const isEscKey = event.key === 'Escape' || event.key === 'Esc';

    if (isEscKey) {
      this._hidePopupLogIn();

      document.removeEventListener('keydown', this._handleEscKeyDown);
    }
  }

  _onSuccessLogIn(isLogIn, player) {
    this._model.registerPlayer(player);
    this._hidePopupLogIn();
    this._userNavigationComponent.isLogIn = isLogIn;
    this._userNavigationComponent.userAvatar = player.avatar;
    this._userNavigationComponent.rerender();
  }
}
