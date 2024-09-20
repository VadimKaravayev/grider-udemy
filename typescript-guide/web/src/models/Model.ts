interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}

export interface HasId {
  id?: number;
}

interface Syncable<T extends HasId> {
  fetch(id: number): Promise<T>;
  save(data: T): Promise<Response>;
}

interface Eventable {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Syncable<T>,
    private eventing: Eventable
  ) {}

  get on() {
    return this.eventing.on.bind(this.eventing);
  }
  //alternatively
  // on = this.eventing.on.bind(this.eventing);

  get trigger() {
    return this.eventing.trigger.bind(this.eventing);
  }

  get get() {
    return this.attributes.get.bind(this.attributes);
  }

  set(update: T): void {
    this.attributes.set(update);
    this.trigger('change');
  }

  fetch() {
    const id = this.attributes.get('id');

    if (!id) {
      throw new Error('id not exist');
    }

    this.sync.fetch(id).then((attrs) => {
      this.set(attrs);
    });
  }

  save() {
    this.sync
      .save(this.attributes.getAll())
      .then(() => this.trigger('save'))
      .catch(() => this.trigger('save-error'));
  }
}
