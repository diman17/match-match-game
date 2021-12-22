import { AbstractComponent } from './abstract-component';

const createUserNavigationTemplate = () => `<ul class="user-navigation">
    <li class="user-navigation__item">
      <button class="button user-navigation__button">Register new player</button>
    </li>
  </ul>`;

export class UserNavigationComponent extends AbstractComponent {
  getTemplate() {
    return createUserNavigationTemplate();
  }
}
