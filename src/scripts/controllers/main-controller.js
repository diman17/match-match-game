import { HeaderComponent } from '../components/header-component';
import { PageNavigationComponent } from '../components/page-navigation-component';
import { renderComponent } from '../utils/common';
import { UserNavigationController } from './user-navigation-controller';

export class MainController {
  constructor(container, router) {
    this._container = container;
    this._router = router;

    this._headerComponent = new HeaderComponent();
    this._pageNavigationComponent = new PageNavigationComponent(this._router.routes);
    this._userNavigationController = new UserNavigationController(
      this._headerComponent.navigationElement,
      this._container,
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
}
