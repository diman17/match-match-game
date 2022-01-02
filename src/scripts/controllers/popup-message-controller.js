import { PopupMessageComponent } from '../components/popup-message-component';
import { removeComponent, renderComponent } from '../utils/component';

export class PopupMessageController {
  constructor(container, textMessage, overlayComponent) {
    this._container = container;
    this._textMessage = textMessage;
    this._overlayComponent = overlayComponent;

    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  init() {
    this._popupMessageComponent = new PopupMessageComponent(this._textMessage);
    this._popupMessageComponent.buttonClickHandler(this._handleButtonClick);

    renderComponent(this._container, this._popupMessageComponent);
  }

  destroy() {
    removeComponent(this._popupMessageComponent);
    removeComponent(this._overlayComponent);
  }

  _handleButtonClick() {
    this.destroy();
  }
}
