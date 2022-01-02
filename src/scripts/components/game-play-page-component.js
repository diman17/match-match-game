import { AbstractComponent } from './abstract-component';

const createGamePlayPageTemplate = (difficulty) => `<main class="game-play-page">
    <h2 class="game-play-page__title">Play game</h2>
    <input class="stopwatch game-play-page__stopwatch" type="text" name="stopwatch" value="00:00" disabled>
    <ul class="game-play-page__card-list layout-${difficulty}"></ul>
  </main>`;

export class GamePlayPageComponent extends AbstractComponent {
  constructor(difficulty) {
    super();
    this._difficulty = difficulty;
    this.cardListElement = this.getElement().querySelector('.game-play-page__card-list');
    this._stopwatchElement = this.getElement().querySelector('.game-play-page__stopwatch');
  }

  getTemplate() {
    return createGamePlayPageTemplate(this._difficulty);
  }

  getTime() {
    return this._stopwatchElement.value;
  }

  startTimer(cb) {
    let seconds = 10;

    this._stopwatchElement.value = `00:${String(seconds)}`;

    this._timer = window.setInterval(() => {
      seconds--;

      if (seconds >= 10) {
        this._stopwatchElement.value = `00:${String(seconds)}`;
      }

      if (seconds < 10) {
        this._stopwatchElement.value = `00:0${String(seconds)}`;
      }

      if (seconds <= 3) {
        const redColor = '#C2242F';
        this._stopwatchElement.style.color = redColor;
      }

      if (seconds === 0) {
        this._stopwatchElement.style.color = '';

        clearInterval(this._timer);
        cb();
      }
    }, 1000);
  }

  startStopwatch() {
    let seconds = 0;
    let minutes = 0;

    this._stopwatch = window.setInterval(() => {
      seconds++;

      if (seconds <= 9 && minutes <= 9) {
        this._stopwatchElement.value = `0${String(minutes)}:0${String(seconds)}`;
      } else if (seconds >= 10 && minutes <= 9) {
        this._stopwatchElement.value = `0${String(minutes)}:${String(seconds)}`;
      } else if (seconds <= 9 && minutes >= 10) {
        this._stopwatchElement.value = `${String(minutes)}:0${String(seconds)}`;
      } else if (seconds >= 10 && minutes >= 10) {
        this._stopwatchElement.value = `${String(minutes)}:${String(seconds)}`;
      }

      if (seconds % 60 === 0) {
        minutes++;
        seconds = 0;

        if (minutes <= 9) {
          this._stopwatchElement.value = `0${String(minutes)}:00`;
        } else {
          this._stopwatchElement.value = `${String(minutes)}:00`;
        }
      }
    }, 1000);
  }

  stopStopwatch() {
    clearInterval(this._stopwatch);
  }
}
