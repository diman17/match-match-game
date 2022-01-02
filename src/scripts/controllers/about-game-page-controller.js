import { AboutGamePageComponent } from '../components/about-game-page-component';
import { removeComponent, renderComponent } from '../utils/component';

export class AboutGamePageController {
  constructor(container) {
    this._container = container;

    this._aboutGamePageComponent = new AboutGamePageComponent();
  }

  init() {
    renderComponent(this._container, this._aboutGamePageComponent);
  }

  destroy() {
    removeComponent(this._aboutGamePageComponent);
  }
}
