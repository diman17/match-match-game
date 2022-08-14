export class PlayersAPI {
  constructor() {
    this._url = 'https://62f7f368ab9f1f8e8906357a.mockapi.io/api/players';
  }

  async getPlayersAll() {
    const players = await fetch(`${this._url}?sortBy=score&order=desc`);
    return players.json();
  }

  async getPlayerByEmail(email) {
    const player = await fetch(`${this._url}?email=${email}`);
    return player.json();
  }

  async updatePlayer(id, player) {
    await fetch(`${this._url}/${id}`, {
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
