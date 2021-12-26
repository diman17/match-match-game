import { AbstractComponent } from './abstract-component';

const createOverlayTemplate = () => `<div class="overlay"></div>`;

export class OverlayComponent extends AbstractComponent {
  getTemplate() {
    return createOverlayTemplate();
  }
}
