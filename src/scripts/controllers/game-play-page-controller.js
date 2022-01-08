import { GamePlayPageComponent } from '../components/game-play-page-component';
import { removeComponent, renderComponent } from '../utils/component';
import { defineCardsCount, getScore, getSecondsFromTime } from '../utils/game';
import { getRandomItemsFromArray, getShuffledArray } from '../utils/common';
import { CardController } from './card-controller';
import { OverlayComponent } from '../components/overlay-component';
import { PopupMessageController } from './popup-message-controller';

export class GamePlayPageController {
  constructor(container, model, playersAPI, _onFinishGame) {
    this._container = container;
    this._model = model;
    this._playersAPI = playersAPI;
    this._onFinishGame = _onFinishGame;

    this._cardControllers = [];

    this._flippedCards = [];
    this._flippedCardsCount = 0;

    this._allAttempts = 0;
    this._failAttempts = 0;

    this._onClickCard = this._onClickCard.bind(this);
    this._onFinishTimer = this._onFinishTimer.bind(this);
    this._onFlippedAllCards = this._onFlippedAllCards.bind(this);
  }

  init() {
    this._cardsCount = defineCardsCount(this._model.getSettings().difficulty);
    this._difficulty = this._model.getSettings().difficulty;

    const uniqueCardImages = getRandomItemsFromArray(this._model.getCardImages(), this._cardsCount / 2);
    const gameCardImages = getShuffledArray(uniqueCardImages.concat(uniqueCardImages));

    this._gamePlayPageComponent = new GamePlayPageComponent(this._difficulty);

    renderComponent(this._container, this._gamePlayPageComponent);

    this._renderCards(gameCardImages);

    this._startGame();
  }

  destroy() {
    removeComponent(this._gamePlayPageComponent);
  }

  _renderCards(images) {
    images.forEach((image) => {
      this._cardController = new CardController(this._gamePlayPageComponent.cardListElement, image, this._onClickCard);
      this._cardController.init();
      this._cardControllers.push(this._cardController);
    });
  }

  _startGame() {
    this._gamePlayPageComponent.startTimer(this._onFinishTimer);
  }

  _onFinishTimer() {
    this._gamePlayPageComponent.startStopwatch();
    this._cardControllers.forEach((controller) => controller.flipBack());
  }

  _onClickCard(cardController) {
    this._flippedCards.push(cardController);
    this._checkFlippedCards();
  }

  _checkFlippedCards() {
    const isFlippedPairCards = this._checkIsFlippedPairCards();

    if (isFlippedPairCards) {
      this._allAttempts++;

      const [firstCard, secondCard] = this._flippedCards;

      if (firstCard.getImage() === secondCard.getImage()) {
        this._flippedCardsCount += this._flippedCards.length;

        this._markAsSuccess(this._flippedCards);

        this._flippedCards = [];
      } else {
        this._failAttempts++;

        this._flippedCards.forEach((card) =>
          card.markAsError(() => {
            setTimeout(() => {
              card.unmarkError();
              card.flipBack();
            }, 1000);
          }),
        );

        this._flippedCards = [];
      }
    }
  }

  _markAsSuccess(cards) {
    cards.forEach((card) => card.markAsSuccess());
    setTimeout(() => {
      this._onFlippedAllCards();
    }, 800);
  }

  _checkIsFlippedPairCards() {
    return this._flippedCards.length % 2 === 0;
  }

  _onFlippedAllCards() {
    if (this._flippedCardsCount === this._cardsCount) {
      this._gamePlayPageComponent.stopStopwatch();

      const time = this._gamePlayPageComponent.getTime();
      const seconds = getSecondsFromTime(time);
      const score = getScore(this._allAttempts, this._failAttempts, seconds);

      this._composeMessageForRender(score, seconds);
    }
  }

  _renderPopupMessage(message) {
    this._overlayComponent = new OverlayComponent();
    renderComponent(this._container, this._overlayComponent);

    this._popupMessageController = new PopupMessageController(
      this._container,
      message,
      this._overlayComponent,
      this._onFinishGame,
    );
    this._popupMessageController.init();
  }

  _composeMessageForRender(score, seconds) {
    const currentScore = this._model.getCurrentPlayer().score;

    if (currentScore === 0) {
      this._renderPopupMessage(
        `Congratulations! You successfully found all matches in ${seconds} seconds. Your new record is ${score} points!`,
      );
    }

    if (score <= currentScore && currentScore !== 0) {
      this._renderPopupMessage(
        `Congratulations! You successfully found all matches in ${seconds} seconds. Your score is ${score} points. Your record is ${currentScore} points.`,
      );
    }

    if (score > currentScore) {
      this._renderPopupMessage(
        `Congratulations! You successfully found all matches in ${seconds} seconds. You broke your record of ${currentScore} points! Your new record is ${score} points!`,
      );

      this._model.updateCurrentPlayerScore(score);

      this._playersAPI.updatePlayer(this._model.getCurrentPlayer().email, this._model.getCurrentPlayer());
    }
  }
}
