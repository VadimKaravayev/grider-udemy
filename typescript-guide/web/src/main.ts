import { Collection } from './models/Collection';
import { USERS_URL } from './configs/ApiConfig';
import { UserProps } from './models/UserProps';
import { User } from './models/User';
import { UserList } from './views/UserList';

const users = new Collection(USERS_URL, (json: UserProps) => {
  return User.newUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');
  root && new UserList(root, users).render();
});

users.fetch();
