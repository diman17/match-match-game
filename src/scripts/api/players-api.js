export class PlayersAPI {
  constructor() {
    this._url = 'http://localhost:3000/api/players';
  }

  async getPlayersAll() {
    const players = await fetch(`${this._url}`);
    return players.json();
  }

  async getPlayerByEmail(email) {
    const player = await fetch(`${this._url}/${email}`);
    return player.json();
  }

  async updatePlayer(email, player) {
    await fetch(`${this._url}/${email}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(player),
    });
  }

  async addPlayer(player) {
    await fetch(`${this._url}`, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(player),
    });
  }
}
