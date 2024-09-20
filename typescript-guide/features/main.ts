enum Color {
  RED = 'red-color',
  GREEN = 'green-color',
  PINK = 'pink-color',
}

const fragment = 'green';

const result = Object.keys(Color)
  .filter((color) => color === fragment.toUpperCase())
  .map((key) => Color[key as keyof typeof Color]);
// .find((it) => !!it);

console.log({ result });
// console.log(result === Color.GREEN);
