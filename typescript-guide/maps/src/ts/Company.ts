import { faker } from '@faker-js/faker';
import { Location } from './Location';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: Location;

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `Company: ${this.companyName}`;
  }
}
