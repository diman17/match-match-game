import { OverlayComponent } from '../components/overlay-component';
import { UserNavigationComponent } from '../components/user-navigation-component';
import { removeComponent, renderComponent } from '../utils/component';
import { PopupLogInController } from './popup-log-in-controller';
import { PopupMessageController } from './popup-message-controller';

export class UserNavigationController {
  constructor(container, rootContainer, model, onLogOut, onStartGame, onStopGame) {
    this._container = container;
    this._rootContainer = rootContainer;
    this._model = model;
    this._onLogOut = onLogOut;
    this._onStartGame = onStartGame;
    this._onStopGame = onStopGame;

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

  changeButtonGame(isGameStart) {
    this._userNavigationComponent.isGameStart = isGameStart;
    this._userNavigationComponent.rerender();
  }

  _handleButtonLogInClick() {
    this._renderPopupLogIn();
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
      this._renderPopupMessage('Choose game cards, please.');
      return;
    }

    if (!settings.difficulty) {
      this._renderPopupMessage('Choose difficulty, please.');
      return;
    }

    this._onStartGame();
    this.changeButtonGame(true);
  }

  _handleButtonStopGameClick() {
    this._onStopGame();
    this.changeButtonGame(false);
  }

  _handleOverlayClick() {
    this._destroyPopupLogIn();
  }

  _renderPopupLogIn() {
    this._overlayComponent = new OverlayComponent();
    this._overlayComponent.overlayClickHandler(this._handleOverlayClick);

    renderComponent(this._rootContainer, this._overlayComponent);

    this._popupLogInController.init();

    document.addEventListener('keydown', this._handleEscKeyDown);
  }

  _destroyPopupLogIn() {
    removeComponent(this._overlayComponent);

    this._popupLogInController.destroy();

    document.removeEventListener('keydown', this._handleEscKeyDown);
  }

  _handleEscKeyDown(event) {
    const isEscKey = event.key === 'Escape' || event.key === 'Esc';

    if (isEscKey) {
      this._destroyPopupLogIn();

      document.removeEventListener('keydown', this._handleEscKeyDown);
    }
  }

  _onSuccessLogIn(isLogIn, player) {
    this._model.registerPlayer(player);
    this._destroyPopupLogIn();
    this._userNavigationComponent.isLogIn = isLogIn;
    this._userNavigationComponent.userAvatar = player.avatar;
    this._userNavigationComponent.rerender();
  }

  _renderPopupMessage(message) {
    this._overlayComponent = new OverlayComponent();
    renderComponent(this._rootContainer, this._overlayComponent);

    this._popupMessageController = new PopupMessageController(this._rootContainer, message, this._overlayComponent);
    this._popupMessageController.init();
  }
}
