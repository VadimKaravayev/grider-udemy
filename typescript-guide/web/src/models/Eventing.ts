type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on(eventName: string, callback: Callback): void {
    this.events[eventName] = [...(this.events[eventName] || []), callback];
  }

  trigger(eventName: string): void {
    (this.events[eventName] || []).forEach((callback) => callback());
  }
}
