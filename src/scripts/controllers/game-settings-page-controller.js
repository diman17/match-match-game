import { GameSettingsPageComponent } from '../components/game-settings-page-component';
import { renderComponent } from '../utils/component';

export class GameSettingsPageController {
  constructor(container, model) {
    this._container = container;
    this._model = model;

    this._gameSettingsPageComponent = new GameSettingsPageComponent();

    this._handleSelectGameCards = this._handleSelectGameCards.bind(this);
    this._handleSelectDifficulty = this._handleSelectDifficulty.bind(this);
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
    this._model.setGameCardsSetting(value);
  }

  _handleSelectDifficulty(value) {
    this._model.setDifficultySetting(value);
  }
}
