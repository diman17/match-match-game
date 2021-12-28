import { GameSettingsPageComponent } from '../components/game-settings-page-component';
import { removeComponent, renderComponent } from '../utils/common';

export class GameSettingsPageController {
  constructor(container) {
    this._container = container;

    this._gameSettingsPageComponent = new GameSettingsPageComponent();
  }

  init() {
    renderComponent(this._container, this._gameSettingsPageComponent);
  }

  destroy() {
    removeComponent(this._gameSettingsPageComponent);
  }
}
