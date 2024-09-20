import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: Array<T> = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on.bind(this.events);
  }

  get trigger() {
    return this.events.trigger.bind(this.events);
  }

  fetch() {
    fetch(this.rootUrl)
      .then((response: Response) => {
        return response.json();
      })
      .then((data: K[]) => {
        data.forEach((props: K) => {
          const item = this.deserialize(props);
          this.models.push(item);
        });
        this.trigger('change');
      });
  }
}
