import { AbstractComponent } from './abstract-component';

const createPopupMessageTemplate = (text) => `<div class="popup-message">
    <p class="popup-message__text">${text}</p>
    <button class="button button--v2 popup-message__button">Ok</button>
  </div>`;

export class PopupMessageComponent extends AbstractComponent {
  constructor(text) {
    super();
    this._text = text;
  }

  getTemplate() {
    return createPopupMessageTemplate(this._text);
  }

  buttonClickHandler(handler) {
    this.getElement().querySelector('.popup-message__button').addEventListener('click', handler);
  }
}
