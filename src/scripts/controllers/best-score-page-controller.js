import { BestScorePageComponent } from '../components/best-score-page-component';
import { removeComponent, renderComponent } from '../utils/component';

export class BestScorePageController {
  constructor(container, model) {
    this._container = container;
    this._model = model;
  }

  init() {
    const sortPlayers = this._getTopPlayers(this._model.getPlayers());

    this._bestScorePageComponent = new BestScorePageComponent(sortPlayers);

    renderComponent(this._container, this._bestScorePageComponent);
  }

  destroy() {
    removeComponent(this._bestScorePageComponent);
  }

  _getTopPlayers(players) {
    const maxPlayers = 10;
    return [...players].sort((a, b) => b.score - a.score).slice(0, maxPlayers);
  }
}
