import { AbstractComponent } from './abstract-component';

const createAboutGamePageTemplate = () => `<main class="game-about">
    <h2 class="game-about__title">How to play?</h2>
    <ul class="game-about__list">
      <li class="game-about__item">
        <div class="game-about__item-description">
          <span class="game-about__item-number">1</span>
          <p class="game-about__item-text">Register new player in game</p>
        </div>
        <picture class="game-about__item-image">
          <source media="(max-width: 1280px)" srcset="./assets/images/about-game/reg-example-1280.jpg" />
          <img class="game-about__item-image" src="./assets/images/about-game/reg-example.jpg" alt="registration" />
        </picture>
      </li>
      <li class="game-about__item">
        <div class="game-about__item-description">
          <span class="game-about__item-number">2</span>
          <p class="game-about__item-text">Configure your game settings</p>
        </div>
        <picture class="game-about__item-image">
          <source media="(max-width: 1280px)" srcset="./assets/images/about-game/settings-example-1280.jpg" />
          <img class="game-about__item-image" src="./assets/images/about-game/settings-example.jpg" alt="settings" />
        </picture>
      </li>
      <li class="game-about__item">
        <div class="game-about__item-description">
          <span class="game-about__item-number">3</span>
          <p class="game-about__item-text">
            Start you new game! Remember card positions and match it before times up.
          </p>
        </div>
        <picture class="game-about__item-image">
          <source media="(max-width: 1280px)" srcset="./assets/images/about-game/game-field-example-1280.jpg" />
          <img
            class="game-about__item-image"
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
