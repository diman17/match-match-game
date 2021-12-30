export class Model {
  constructor() {
    this._players = [];

    this._settings = {
      gameCards: '',
      difficulty: '',
    };
  }

  getPlayers() {
    return this._players;
  }

  setPlayers(players) {
    this._players = Array.from(players);
  }

  registerPlayer(registeredPlayer) {
    const index = this._players.findIndex((player) => player.email === registeredPlayer.email);

    if (index + 1) {
      this._updatePlayer(index, registeredPlayer);
    } else {
      this._addPlayer(registeredPlayer);
    }
  }

  getSettings() {
    return this._settings;
  }

  setGameCardsSetting(value) {
    this._settings.gameCards = value;
  }

  setDifficultySetting(value) {
    this._settings.difficulty = value;
  }

  _addPlayer(player) {
    this._players.push(player);
  }

  _updatePlayer(index, player) {
    this._players[index] = player;
  }
}
