import { Model } from './Model';
import { UserProps } from './UserProps';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export class User extends Model<UserProps> {
  private static readonly URL: string = 'http://127.0.0.1:3001/users';

  static newUser(attrs: UserProps): User {
    return new User(
      new Attributes(attrs),
      new ApiSync(User.URL),
      new Eventing()
    );
  }

  static newUserCollection(): Collection<User, UserProps> {
    return new Collection(User.URL, User.newUser);
  }
}
