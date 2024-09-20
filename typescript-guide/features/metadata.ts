import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('Hi there')
  fly(): void {
    console.log('vrrrr');
  }
}
function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);

// console.log(plane);

// console.log(note);
