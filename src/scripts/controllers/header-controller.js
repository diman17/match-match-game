import { HeaderComponent } from '../components/header-component';
import { PageNavigationComponent } from '../components/page-navigation-component';
import { UserNavigationComponent } from '../components/user-navigation-component';
import { render } from '../utils/render';

export class HeaderController {
  constructor(container) {
    this._container = container;

    this._headerComponent = new HeaderComponent();
    this._pageNavigationComponent = new PageNavigationComponent();
    this._userNavigationComponent = new UserNavigationComponent();
  }

  render() {
    render(this._container, this._headerComponent);
    render(this._headerComponent.navigation, this._pageNavigationComponent);
    render(this._headerComponent.navigation, this._userNavigationComponent);

    this._headerComponent.buttonBurgerClickHandler();
  }
}
