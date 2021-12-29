export class Model {
  constructor() {
    this._players = [];
    this._settings = {
      gameCards: '',
      difficulty: '',
    };
    this._isLogIn = false;
  }

  getPlayers() {
    return this._players;
  }

  setPlayers(players) {
    this._players = Array.from(players);
  }

  registerPlayer() {}

  getSetting(setting) {
    return this._settings[setting];
  }

  setGameCardsSetting(value) {
    this._settings.gameCards = value;
  }

  setDifficultySetting(value) {
    this._settings.difficulty = value;
  }
}
