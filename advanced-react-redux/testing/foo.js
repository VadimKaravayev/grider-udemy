function doOnCondition(cond, action) {
  if (cond) action();
}

function returnOnCondition(cond, fn) {
  if (cond) return fn();
}

function resolveCondition(...args) {
  return args.reduce((acc, cur) => {
    return acc || cur;
  }, null);
}

const x =
  returnOnCondition(4 > 34, () => "cond1") ||
  returnOnCondition(4 > 3, () => "cond2");

console.log(resolveCondition(2, 3, 4));
