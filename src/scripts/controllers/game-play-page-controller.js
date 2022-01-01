import { CardComponent } from '../components/card-component';
import { GamePlayPageComponent } from '../components/game-play-page-component';
import { defineCardsCount, removeComponent, renderComponent } from '../utils/common';

export class GamePlayPageController {
  constructor(container, model) {
    this._container = container;
    this._model = model;
  }

  init() {
    const cardsCount = defineCardsCount(this._model.getSettings().difficulty);
    const { difficulty } = this._model.getSettings();

    this._gamePlayPageComponent = new GamePlayPageComponent(difficulty);

    renderComponent(this._container, this._gamePlayPageComponent);

    for (let index = 0; index < cardsCount; index++) {
      this._cardComponent = new CardComponent();
      renderComponent(this._gamePlayPageComponent.cardListElement, this._cardComponent);
    }
  }

  destroy() {
    removeComponent(this._gamePlayPageComponent);
  }
}
