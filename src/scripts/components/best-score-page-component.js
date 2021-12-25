import { AbstractComponent } from './abstract-component';

const createBestScoreItemTemplate = (player) => {
  const { image, name, email, score } = player;
  return ` <li class="best-score__item">
    <div class="best-score__player-info">
      <img
        class="best-score__player-avatar"
        src="${image}"
        alt="player's avatar"
      />
      <div class="best-score__player-wrapper">
        <p class="best-score__player-name">${name}</p>
        <p class="best-score__player-email">${email}</p>
      </div>
    </div>
    <p class="best-score__player-score">Score: <span class="best-score__player-value">${score}</span></p>
  </li>`;
};

const createBestScorePageTemplate = (players) => `<main class="best-score">
    <h2 class="best-score__title">Best players</h2>
    <ul class="best-score__list">
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
