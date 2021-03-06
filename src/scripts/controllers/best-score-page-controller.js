import { BestScorePageComponent } from '../components/best-score-page-component';
import { LoaderComponent } from '../components/loader-component';
import { removeComponent, renderComponent } from '../utils/component';

export class BestScorePageController {
  constructor(container, model, playersAPI) {
    this._container = container;
    this._model = model;
    this._playersAPI = playersAPI;

    this._loaderComponent = new LoaderComponent();
  }

  init() {
    renderComponent(this._container, this._loaderComponent);

    this._playersAPI.getPlayersAll().then((players) => {
      this._model.setPlayers(players);

      this._bestScorePageComponent = new BestScorePageComponent(this._model.getPlayers());

      removeComponent(this._loaderComponent);
      renderComponent(this._container, this._bestScorePageComponent);
    });
  }

  destroy() {
    removeComponent(this._bestScorePageComponent);
  }
}
