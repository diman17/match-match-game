import { AbstractComponent } from './abstract-component';

export class AbstractSmartComponent extends AbstractComponent {
  recoveryListeners() {
    throw new Error('Abstract method not implemented: recoveryListener');
  }

  rerender() {
    const oldElement = this.getElement();
    const { parentElement } = oldElement;

    this.removeElement();

    const newElement = this.getElement();

    parentElement.replaceChild(newElement, oldElement);

    this.recoveryListeners();
  }
}
