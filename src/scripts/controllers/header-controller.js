import { HeaderComponent } from '../components/header-component';
import { PageNavigationComponent } from '../components/page-navigation-component';
import { UserNavigationComponent } from '../components/user-navigation-component';
import { render } from '../utils/render';

export class HeaderController {
  constructor(container, router) {
    this._container = container;
    this._router = router;

    this._headerComponent = new HeaderComponent();
    this._pageNavigationComponent = new PageNavigationComponent(this._router.routes);
    this._userNavigationComponent = new UserNavigationComponent();

    this._router.pageLinkElements = this._pageNavigationComponent.pageLinkElements;
  }

  init() {
    render(this._container, this._headerComponent);
    render(this._headerComponent.navigationElement, this._pageNavigationComponent);
    render(this._headerComponent.navigationElement, this._userNavigationComponent);

    this._router.init();

    this._headerComponent.buttonBurgerClickHandler();
    this._pageNavigationComponent.navigationClickHandler();
  }
}
