export default class DomControl {
  private container: HTMLDivElement;

  init(container: HTMLDivElement) {
    this.container = container;
  }

  getContainer() {
    return this.container;
  }
}
