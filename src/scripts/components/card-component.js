import { AbstractComponent } from './abstract-component';

const createCardTemplate = (image) => `<li class="card flip">
    <div class="card__container">
      <div class="card__wrapper">
        <div class="card__front" style="transform: rotateY(180deg);"></div>
        <div class="card__back" style="background-image: url('${image}'); transform: rotateY(360deg);"></div>
      </div>
    </div>
  </li>`;

export class CardComponent extends AbstractComponent {
  constructor(image) {
    super();
    this._image = image;
    this._isFlip = false;

    this._cardFrontElement = this.getElement().querySelector('.card__front');
    this._cardBackElement = this.getElement().querySelector('.card__back');
  }

  getTemplate() {
    return createCardTemplate(this._image);
  }

  getImage() {
    return this._cardBackElement.style.backgroundImage;
  }

  markAsSuccess() {
    this.getElement().classList.add('success');
  }

  markAsError() {
    this.getElement().classList.add('error');
  }

  unmarkError() {
    this.getElement().classList.remove('error');
  }

  flip() {
    this.getElement().classList.add('flip');
    this._cardFrontElement.style.transform = 'rotateY(180deg)';
    this._cardBackElement.style.transform = 'rotateY(360deg)';
  }

  flipBack() {
    this._isFlip = false;
    this.getElement().classList.remove('flip');
    this._cardFrontElement.style.transform = 'rotateY(0deg)';
    this._cardBackElement.style.transform = 'rotateY(180deg)';
  }

  cardClickHandler(handler) {
    this.getElement().addEventListener('click', () => {
      if (!this._isFlip) {
        this.flip();
        this._isFlip = true;
        handler(this);
      }
    });
  }
}
