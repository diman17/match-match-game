import { BestScorePageComponent } from '../components/best-score-page-component';
import { removeComponent, renderComponent } from '../utils/common';

export class BestScorePageController {
  constructor(container) {
    this._container = container;

    this._bestScorePageComponent = new BestScorePageComponent();
  }

  init() {
    renderComponent(this._container, this._bestScorePageComponent);
  }

  destroy() {
    removeComponent(this._bestScorePageComponent);
  }
}
