const engine = {
  working: true,
};

const mustang = {
  name: 'mustang',
  engine: engine,
};

const camaro = {
  name: 'camaro',
  engine: engine,
};

function checkCar(car) {
  if (car.name === 'mustang') {
    car.engine.working = false;
  }
}
checkCar(mustang);
console.log(mustang);
console.log(camaro);
