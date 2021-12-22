import { AbstractComponent } from './abstract-component';

const createPageNavigationTemplate = (routesList) => `<ul class="page-navigation">
    <li class="page-navigation__item">
      <a class="page-navigation__link page-navigation__link--about page-navigation__link--active" href="${routesList.ABOUT}"
        >About game</a
      >
    </li>
    <li class="page-navigation__item">
      <a class="page-navigation__link page-navigation__link--score" href="${routesList.SCORE}">Best score</a>
    </li>
    <li class="page-navigation__item">
      <a class="page-navigation__link page-navigation__link--settings" href="${routesList.SETTINGS}">Game Settings</a>
    </li>
  </ul>`;

export const routes = {
  ABOUT: '/',
  SCORE: '#best-score',
  SETTINGS: '#game-settings',
};

export class PageNavigationComponent extends AbstractComponent {
  getTemplate() {
    return createPageNavigationTemplate(routes);
  }
}
