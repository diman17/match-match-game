import { AbstractComponent } from './abstract-component';

const createUserNavigationTemplate = () => `<ul class="user-navigation">
    <li class="user-navigation__item">
      <button class="button user-navigation__button">Log in</button>
    </li>
  </ul>`;

export class UserNavigationComponent extends AbstractComponent {
  getTemplate() {
    return createUserNavigationTemplate();
  }

  buttonLogInClickHandler(handler) {
    this.getElement().querySelector('.button').addEventListener('click', handler);
  }
}
