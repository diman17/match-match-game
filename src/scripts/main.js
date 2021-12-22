import '../scss/style.scss';
import { HeaderComponent } from './components/header-component';
import { PageNavigationComponent } from './components/page-navigation-component';
import { UserNavigationComponent } from './components/user-navigation-component';
import { render } from './utils/render';

const headerComponent = new HeaderComponent();
render(document.body, headerComponent);

const pageNavigationComponent = new PageNavigationComponent();
render(headerComponent.navigation, pageNavigationComponent);

const userNavigationComponent = new UserNavigationComponent();
render(headerComponent.navigation, userNavigationComponent);
