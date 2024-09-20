import { User } from '../models/User';
import { Model, HasId } from '../models/Model';

interface ModelForView {
  on(eventName: string, callback: () => void);
}

export abstract class View<T extends Model<K>, K extends HasId> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  bindModel(): void {
    this.model.on('change', this.render.bind(this));
  }

  bindEvents(fragment: DocumentFragment): void {
    this.parent.innerHTML = '';
    const eventsMap = this.eventsMap();
    Object.keys(eventsMap).forEach((eventKey) => {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey].bind(this));
      });
    });
  }

  mapRegions(fragment: DocumentFragment): void {
    Object.entries(this.regionsMap()).forEach(([key, selector]) => {
      const element = fragment.querySelector(selector);
      element && (this.regions[key] = element);
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  onRender(): void {}

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    const { content } = templateElement;
    this.bindEvents(content);
    this.mapRegions(content);
    this.onRender();
    this.parent.append(content);
  }

  abstract template(): string;
}
