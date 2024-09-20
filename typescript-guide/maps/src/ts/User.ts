import { faker } from '@faker-js/faker';
import { Location } from './Location';

export class User {
  name: string;
  location: Location;

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `User's name: ${this.name}`;
  }
}
