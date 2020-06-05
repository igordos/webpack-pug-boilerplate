console.log('Import ./js/index.js');
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = `qwe`;
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
