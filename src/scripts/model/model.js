import { cards } from '../mock/cards';

export class Model {
  constructor() {
    this._players = [];
    this._cards = [];
    this._currentPlayer = null;

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
      if (!this._players[index].score) {
        this._updatePlayer(index, registeredPlayer);
      } else {
        registeredPlayer.score = this._players[index].score
        this._updatePlayer(index, registeredPlayer);
      }
    } else {
      this._addPlayer(registeredPlayer);
    }
  }

  setCurrentPlayer(player) {
    this._currentPlayer = player;
  }

  deleteCurrentPlayer() {
    this._currentPlayer = null;
  }

  updateCurrentPlayerScore(score) {
    this._currentPlayer.score = score;

    const index = this._players.findIndex((player) => player.email === this._currentPlayer.email);

    this._updatePlayer(index, this._currentPlayer);
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

  getCardImages() {
    this._cards = cards[this._settings.gameCards];
    return this._cards;
  }

  _addPlayer(player) {
    this._players.push(player);
  }

  _updatePlayer(index, player) {
    this._players[index] = player;
  }
}
