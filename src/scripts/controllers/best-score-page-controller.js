import { BestScorePageComponent } from '../components/best-score-page-component';
import { removeComponent, renderComponent } from '../utils/common';

export class BestScorePageController {
  constructor(container, players) {
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
