'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const parrent = input.closest('.field');
  const newLabel = document.createElement('label');

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', input.getAttribute('id'));
  newLabel.textContent = input.getAttribute('name');
  input.setAttribute('placeholder', capitalize(input.getAttribute('name')));
  parrent.append(newLabel);
});
