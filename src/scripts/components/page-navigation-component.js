import { AbstractComponent } from './abstract-component';

const createPageNavigationTemplate = (routes) => `<ul class="page-navigation">
    <li class="page-navigation__item">
      <a class="page-navigation__link page-navigation__link--about page-navigation__link--active" href="${routes.ABOUT_GAME.path}">About game</a>
    </li>
    <li class="page-navigation__item">
      <a class="page-navigation__link page-navigation__link--score" href="${routes.BEST_SCORE.path}">Best score</a>
    </li>
    <li class="page-navigation__item">
      <a class="page-navigation__link page-navigation__link--settings" href="${routes.GAME_SETTINGS.path}">Game Settings</a>
    </li>
  </ul>`;

export class PageNavigationComponent extends AbstractComponent {
  constructor(routes) {
    super();
    this._routes = routes;
    this.pageLinkElements = this.getElement().querySelectorAll('.page-navigation__link');
  }

  getTemplate() {
    return createPageNavigationTemplate(this._routes);
  }

  navigationClickHandler() {
    this.pageLinkElements.forEach((pageLink) => {
      pageLink.addEventListener('click', () => {
        if (!pageLink.classList.contains('page-navigation__link--active')) {
          this.pageLinkElements.forEach((link) => link.classList.remove('page-navigation__link--active'));
        }
        pageLink.classList.add('page-navigation__link--active');
      });
    });
  }
}
