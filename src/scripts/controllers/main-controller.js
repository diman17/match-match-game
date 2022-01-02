import { HeaderComponent } from '../components/header-component';
import { PageNavigationComponent } from '../components/page-navigation-component';
import { renderComponent } from '../utils/component';
import { UserNavigationController } from './user-navigation-controller';

export class MainController {
  constructor(container, router, model) {
    this._container = container;
    this._router = router;
    this._model = model;

    this._onLogOut = this._onLogOut.bind(this);
    this._onStartGame = this._onStartGame.bind(this);
    this._onStopGame = this._onStopGame.bind(this);
    this._onFinishGame = this._onFinishGame.bind(this);

    this._headerComponent = new HeaderComponent();
    this._pageNavigationComponent = new PageNavigationComponent(this._router.routes);
    this._userNavigationController = new UserNavigationController(
      this._headerComponent.navigationElement,
      this._container,
      this._model,
      this._onLogOut,
      this._onStartGame,
      this._onStopGame,
    );

    this._router.pageLinkElements = this._pageNavigationComponent.pageLinkElements;
  }

  init() {
    renderComponent(this._container, this._headerComponent);
    renderComponent(this._headerComponent.navigationElement, this._pageNavigationComponent);

    this._userNavigationController.init();
    this._router.init();

    this._headerComponent.buttonBurgerClickHandler();
    this._pageNavigationComponent.navigationClickHandler();
  }

  _onLogOut() {
    this._router.changeRoute(this._router.routes.ABOUT_GAME_PAGE.hash);

    this._pageNavigationComponent.activateLinks();
  }

  _onStartGame() {
    this._router.addGamePlayRoute(this._onFinishGame);
    this._router.changeRoute(this._router.routes.GAME_PLAY_PAGE.hash);

    this._pageNavigationComponent.disableLinks();
  }

  _onStopGame() {
    this._router.changeRoute(this._router.routes.GAME_SETTINGS_PAGE.hash);

    this._pageNavigationComponent.activateLinks();
  }

  _onFinishGame() {
    this._changeRoute(this._router.routes.BEST_SCORE_PAGE.hash);
    this._changeButtonGame(false);
  }

  _changeRoute(route) {
    this._router.changeRoute(route);
    this._router.removeRoute('GAME_PLAY_PAGE');

    this._pageNavigationComponent.activateLinks();
  }

  _changeButtonGame(isGameStart) {
    this._userNavigationController.changeButtonGame(isGameStart);
  }
}
