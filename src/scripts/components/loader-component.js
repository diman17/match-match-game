import { AbstractComponent } from './abstract-component';

const createLoaderTemplate = () => `<div class="loader">
    <img class="loader__image" src="./assets/images/loader.gif" alt="loader">
  </div>`;

export class LoaderComponent extends AbstractComponent {
  getTemplate() {
    return createLoaderTemplate();
  }
}
