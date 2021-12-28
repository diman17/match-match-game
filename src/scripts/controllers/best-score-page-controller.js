import { BestScorePageComponent } from '../components/best-score-page-component';
import { removeComponent, renderComponent } from '../utils/common';
import { generatePlayers } from '../mock/players';

const players = generatePlayers();

export class BestScorePageController {
  constructor(container) {
    this._container = container;
    this._players = players;
    this._bestScorePageComponent = new BestScorePageComponent(this._players);
  }

  init() {
    renderComponent(this._container, this._bestScorePageComponent);
  }

  destroy() {
    removeComponent(this._bestScorePageComponent);
  }
}
