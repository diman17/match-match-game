import { AbstractComponent } from './abstract-component';

const createGamePlayPageTemplate = (difficulty) => `<main class="game-play-page">
    <h2 class="game-play-page__title">Play game</h2>
    <input class="stopwatch game-play-page__stopwatch" type="text" name="stopwatch" value="00:00" disabled>
    <ul class="game-play-page__card-list layout-${difficulty}"></ul>
  </main>`;

export class GamePlayPageComponent extends AbstractComponent {
  constructor(difficulty) {
    super();
    this._difficulty = difficulty;
    this.cardListElement = this.getElement().querySelector('.game-play-page__card-list');
  }

  getTemplate() {
    return createGamePlayPageTemplate(this._difficulty);
  }
}
