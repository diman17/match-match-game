import { AbstractComponent } from './abstract-component';

const gameSettings = {
  GAME_CARDS: {
    label: 'Game cards',
    name: 'game-cards',
    selectText: 'select game cards type',
    options: ['animals', 'cars'],
  },
  DIFFICULTY: {
    label: 'Difficulty',
    name: 'difficulty',
    selectText: 'select game type',
    options: ['3x4', '4x4'],
  },
};

const createGameSettingsOptionTemplate = (option) =>
  `<option class="game-settings-page__option" value="${option}">${option}</option>`;

const createGameSettingsItemTemplate = (setting) => `<li class="game-settings-page__item">
    <label class="game-settings-page__label" for="${setting.name}">${setting.label}</label>
    <select class="game-settings-page__select" id="${setting.name}" name="${setting.name}">
      <option class="game-settings-page__option" disabled selected hidden>${setting.selectText}</option>
      ${setting.options.map((option) => createGameSettingsOptionTemplate(option)).join('\n')}
    </select>
  </li>`;

const createGameSettingsPageTemplate = (settings) => `<main class="game-settings-page">
    <h2 class="main-settings__title">Game settings</h2>
    <ul class="game-settings-page__list">
      ${Object.values(settings)
        .map((setting) => createGameSettingsItemTemplate(setting))
        .join('\n')}
    </ul>
  </main>`;

export class GameSettingsPageComponent extends AbstractComponent {
  constructor() {
    super();
    this._gameSettings = gameSettings;
  }

  getTemplate() {
    return createGameSettingsPageTemplate(this._gameSettings);
  }

  selectGameCardsHandler(handler) {
    this.getElement()
      .querySelector(`.game-settings-page__select[name=${gameSettings.GAME_CARDS.name}]`)
      .addEventListener('input', (event) => {
        const { value } = event.target;
        handler(value);
      });
  }

  selectDifficultyHandler(handler) {
    this.getElement()
      .querySelector(`.game-settings-page__select[name=${gameSettings.DIFFICULTY.name}]`)
      .addEventListener('input', (event) => {
        const { value } = event.target;
        handler(value);
      });
  }
}
