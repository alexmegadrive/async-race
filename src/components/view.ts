import { Model } from './model';

export class View {
  model: Model;
  app: HTMLElement | null;
  constructor() {
    this.model = new Model();
    this.app = document.querySelector('#app');
  }

  renderUI() {
    //
  }

  renderGarage() {
    //
  }

  renderWinners() {
    //
  }
}
