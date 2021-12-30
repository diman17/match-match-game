import { AbstractComponent } from './abstract-component';

const createBestScoreItemTemplate = (player) => {
  const { avatar, name, email, score } = player;
  return ` <li class="best-score-page__item">
    <div class="best-score-page__player-info">
      <img
        class="best-score-page__player-avatar"
        src="${avatar}"
        alt="player's avatar"
      />
      <div class="best-score-page__player-wrapper">
        <p class="best-score-page__player-name">${name}</p>
        <p class="best-score-page__player-email">${email}</p>
      </div>
    </div>
    <p class="best-score-page__player-score">Score: <span class="best-score-page__player-value">${score}</span></p>
  </li>`;
};

const createBestScorePageTemplate = (players) => `<main class="best-score-page">
    <h2 class="best-score-page__title">Best players</h2>
    <ul class="best-score-page__list">
      ${players.map((player) => createBestScoreItemTemplate(player)).join('\n')}
    </ul>
  </main>`;

export class BestScorePageComponent extends AbstractComponent {
  constructor(players) {
    super();
    this._players = players;
  }

  getTemplate() {
    return createBestScorePageTemplate(this._players);
  }
}
