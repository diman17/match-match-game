import { CardComponent } from '../components/card-component';
import { removeComponent, renderComponent } from '../utils/component';

export class CardController {
  constructor(container, image, onClickCard) {
    this._container = container;
    this._image = image;
    this._onClickCard = onClickCard;

    this._handleCardClick = this._handleCardClick.bind(this);

    this._cardComponent = new CardComponent(this._image);

    this._cardComponent.cardClickHandler(this._handleCardClick);
  }

  init() {
    renderComponent(this._container, this._cardComponent);
  }

  destroy() {
    removeComponent(this._cardComponent);
  }

  getImage() {
    return this._cardComponent.getImage();
  }

  flipBack() {
    this._cardComponent.flipBack();
  }

  markAsSuccess() {
    setTimeout(() => {
      this._cardComponent.markAsSuccess();
    }, 800);
  }

  markAsError(cb) {
    setTimeout(() => {
      this._cardComponent.markAsError();
      cb();
    }, 800);
  }

  unmarkError() {
    this._cardComponent.unmarkError();
  }

  _handleCardClick(cardComponent) {
    this._cardComponent = cardComponent;
    this._onClickCard(this);
  }
}
