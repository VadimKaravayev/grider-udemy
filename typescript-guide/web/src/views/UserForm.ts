import { User } from '../models/User';
import { View } from './View';
import { UserProps } from '../models/UserProps';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onButtonClick(): void {
    console.log('hi there ' + crypto.randomUUID());
  }

  onSetNameClick(): void {
    const input = this.parent.querySelector('input');
    const name = input?.value;
    this.model.set({ name });
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>Age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Change name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
  }
}
