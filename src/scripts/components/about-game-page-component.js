import { AbstractComponent } from './abstract-component';

const createAboutGamePageTemplate = () => `<main class="about-game-page">
    <h2 class="about-game-page__title">How to play?</h2>
    <ul class="about-game-page__list">
      <li class="about-game-page__item">
        <div class="about-game-page__item-description">
          <span class="about-game-page__item-number">1</span>
          <p class="about-game-page__item-text">Register player in game</p>
        </div>
        <picture class="about-game-page__item-image">
          <source media="(max-width: 1280px)" srcset="./assets/images/about-game/reg-example-1280.jpg" />
          <img class="about-game-page__item-image" src="./assets/images/about-game/reg-example.jpg" alt="registration" />
        </picture>
      </li>
      <li class="about-game-page__item">
        <div class="about-game-page__item-description">
          <span class="about-game-page__item-number">2</span>
          <p class="about-game-page__item-text">Configure your game settings</p>
        </div>
        <picture class="about-game-page__item-image">
          <source media="(max-width: 1280px)" srcset="./assets/images/about-game/settings-example-1280.jpg" />
          <img class="about-game-page__item-image" src="./assets/images/about-game/settings-example.jpg" alt="settings" />
        </picture>
      </li>
      <li class="about-game-page__item">
        <div class="about-game-page__item-description">
          <span class="about-game-page__item-number">3</span>
          <p class="about-game-page__item-text">
            Start you new game! Remember card positions and match it before times up.
          </p>
        </div>
        <picture class="about-game-page__item-image">
          <source media="(max-width: 1280px)" srcset="./assets/images/about-game/game-field-example-1280.jpg" />
          <img
            class="about-game-page__item-image"
            src="./assets/images/about-game/game-field-example.jpg"
            alt="game-field"
          />
        </picture>
      </li>
    </ul>
  </main>`;

export class AboutGamePageComponent extends AbstractComponent {
  getTemplate() {
    return createAboutGamePageTemplate();
  }
}
