function pipe(val) {
  return (...fns) => fns.reduce((total, current) => current(total), val);
}

function getFormData(target) {
  return new FormData(target);
}

function getInput(name) {
  return (form) => form.get(name);
}

function encrypt(val) {
  return btoa(val);
}

function setInputVal(selector) {
  return (val) => {
    const input = document.querySelector(selector);
    input.value = val;
    return input;
  };
}

function selectInput(input) {
  input.select();
  return input;
}

function generateUrl(val) {
  return `${window.location}#${val}`;
}

function getNode(selector) {
  const node = document.querySelector(selector);
  return {
    and: (fn) => fn(node),
    add: (clazz) => node.classList.add(clazz),
    remove: (clazz) => node.classList.remove(clazz),
    html: (val) => (node.innerHTML = val),
    value: node,
  };
}

function forNodeClass(clazz) {
  return {
    do: (action) => (node) => node.classList[action](clazz),
  };
}

function wrap(node) {
  return {
    add: (clazz) => node.classList.add(clazz),
    remove: (clazz) => node.classList.remove(clazz),
    html: (val) => (node.innerHTML = val),
  };
}
