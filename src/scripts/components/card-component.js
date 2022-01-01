import { AbstractComponent } from './abstract-component';

const createCardTemplate = () => `<li class="card">
    <div class="card__container">
      <div class="card__wrapper">
        <div class="card__front"></div>
        <div class="card__back"></div>
      </div>
    </div>
  </li>`;

export class CardComponent extends AbstractComponent {
  getTemplate() {
    return createCardTemplate();
  }
}
