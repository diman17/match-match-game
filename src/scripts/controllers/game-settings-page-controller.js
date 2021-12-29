import { GameSettingsPageComponent } from '../components/game-settings-page-component';
import { renderComponent } from '../utils/common';

export class GameSettingsPageController {
  constructor(container) {
    this._container = container;

    this._gameSettingsPageComponent = new GameSettingsPageComponent();
  }

  init() {
    renderComponent(this._container, this._gameSettingsPageComponent);

    this._gameSettingsPageComponent.selectGameCardsHandler(this._handleSelectGameCards);
    this._gameSettingsPageComponent.selectDifficultyHandler(this._handleSelectDifficulty);
  }

  destroy() {
    this._gameSettingsPageComponent.getElement().remove();
  }

  _handleSelectGameCards(value) {
    console.log('value :>> ', value);
  }

  _handleSelectDifficulty(value) {
    console.log('value :>> ', value);
  }
}
