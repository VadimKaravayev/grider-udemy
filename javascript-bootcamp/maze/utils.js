const randomDimension = (value = 0) => Math.random() * value;

const shuffle = (arr) => {
  let counter = arr.length;
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
};

const shuffleV2 = (arr) =>
  arr
    .map((x) => ({ sort: Math.random(), value: x }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value);
