import keyboardObject from './keyboard_object.js'; // eslint-disable-line

const body = document.querySelector('body');

const title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'Virtual keyboard';

const textField = document.createElement('textarea');
textField.cols = '100';
textField.rows = '10';
textField.classList.add('text_field');

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const info = document.createElement('div');
info.classList.add('info');
info.innerHTML = 'Задание выполнено на Windows<br>Смена языка: левые Ctrl + Alt';

body.appendChild(title);
body.appendChild(textField);
body.appendChild(keyboard);
body.appendChild(info);

let lang;
let register = 'lower';
let layout = `${lang}_${register}`;
let text = '';
let capsLock = false;
let ctrl = false;

function refill() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.innerText = keyboardObject[button.parentNode.dataset.row][button.dataset.name][layout]; // eslint-disable-line
  });
}

// get data from the storage
function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    const tmplang = localStorage.getItem('lang');
    if (tmplang !== 'undefined') {
      lang = tmplang;
      layout = `${lang}_${register}`;
      refill();
    } else {
      lang = 'en';
      layout = `${lang}_${register}`;
      refill();
    }
  }
}
window.addEventListener('load', getLocalStorage);

// save data to the storage
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function changeRegister() {
  capsLock = !capsLock;
  register = capsLock ? 'upper' : 'lower';
  layout = `${lang}_${register}`;
  refill();
}

function changeLanguage() {
  ctrl = false;
  lang = lang === 'en' ? 'ru' : 'en';
  layout = `${lang}_${register}`;
  refill();
}

function clickHandler(event) {
  if (event.target.dataset.name === 'Backspace') {
    text = text.slice(0, -1);
  } else if (event.target.dataset.name === 'Tab') {
    text += '    ';
  } else if (event.target.dataset.name === 'Enter') {
    text += '\n';
  } else if (event.target.dataset.name === 'CapsLock' || event.code === 'CapsLock') {
    changeRegister();
  } else if (event.target.dataset.name === 'ControlLeft' || event.code === 'ControlLeft') {
    ctrl = true;
  } else if ((event.target.dataset.name === 'AltLeft' && ctrl) || (event.code === 'AltLeft' && ctrl)) {
    changeLanguage();
  } else if (event.target.dataset.name === 'MetaLeft'
    || event.target.dataset.name === 'AltRight'
    || event.target.dataset.name === 'ControlRight'
    || event.target.dataset.name === 'AltLeft'
    || event.target.dataset.name === 'Delete') {
  } else if (event.target.parentNode.dataset.row) {
    text += keyboardObject[event.target.parentNode.dataset.row][event.target.dataset.name][layout];
    ctrl = false;
  }
  textField.innerHTML = text;
}

function highLightOn(event) {
  clickHandler(event);
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    if (button.dataset.name === event.code || button.dataset.name === event.target.dataset.name) {
      button.classList.add('_active');
    }
  });
}

function highLightOff(event) {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    if (button.dataset.name === event.code || button.dataset.name === event.target.dataset.name) {
      button.classList.remove('_active');
    }
  });
}

keyboardObject.forEach((item, idx) => {
  const row = document.createElement('div');
  row.classList.add('row');
  row.dataset.row = idx;
  keyboard.appendChild(row);
  Object.keys(item).forEach((elem) => {
    const button = document.createElement('div');
    button.classList.add('button');
    button.dataset.name = elem;
    if (elem === 'ShiftLeft' || elem === 'ShiftRight') {
      button.addEventListener('mousedown', changeRegister);
      button.addEventListener('mouseup', changeRegister);
    } else {
      button.addEventListener('click', clickHandler);
    }
    button.addEventListener('mousedown', highLightOn);
    button.addEventListener('mouseup', highLightOff);
    if (item[elem].width) {
      button.style.width = item[elem].width;
    }
    row.appendChild(button);
  });
});
getLocalStorage();

window.addEventListener('keydown', highLightOn);
window.addEventListener('keyup', highLightOff);
