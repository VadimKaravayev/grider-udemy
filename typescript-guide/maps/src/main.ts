import './less/main.less';
import { User } from './ts/User';
import { Company } from './ts/Company';
import { CustomMap } from './ts/CustomMap';

console.log('Maps app is on');

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

console.log(user);
console.log(company);

customMap.addMarker(user);
customMap.addMarker(company);
