import { GamePlayPageComponent } from '../components/game-play-page-component';
import { removeComponent, renderComponent } from '../utils/component';
import { defineCardsCount } from '../utils/game';
import { getRandomItemsFromArray, getShuffledArray } from '../utils/common';
import { CardController } from './card-controller';

export class GamePlayPageController {
  constructor(container, model) {
    this._container = container;
    this._model = model;

    this._cardControllers = [];

    this._flippedCards = [];
    this._flippedCardsCount = 0;

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
      const [firstCard, secondCard] = this._flippedCards;

      if (firstCard.getImage() === secondCard.getImage()) {
        this._flippedCardsCount += this._flippedCards.length;

        this._flippedCards.forEach((card) => card.markAsSuccess(this._onFlippedAllCards));

        this._flippedCards = [];
      } else {
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

  _checkIsFlippedPairCards() {
    return this._flippedCards.length % 2 === 0;
  }

  _onFlippedAllCards() {
    if (this._flippedCardsCount === this._cardsCount) {
      this._gamePlayPageComponent.stopStopwatch();
      const time = this._gamePlayPageComponent.getTime();
      console.log(`Congratulations! You successfully found all matches in ${time} minutes.`);
    }
  }
}
