import keyboardObject from './keyboard_object.js';

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
info.innerHTML = 'Задание выполнено на Windows</br>Смена языка: левые Ctrl + Alt';

body.appendChild(title);
body.appendChild(textField);
body.appendChild(keyboard);
body.appendChild(info);

let lang = 'en';
let register = 'lower';
let layout = `${lang}_${register}`; // redundant

function refill() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.innerText = keyboardObject[button.parentNode.dataset.row][button.dataset.name][layout];
  });
}

let text = '';
let capsLock = false;
let ctrl = false;

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
  if (event.target.dataset.name === 'backspace') {
    text = text.slice(0, -1);
  } else if (event.target.dataset.name === 'tab') {
    text += '    ';
  } else if (event.target.dataset.name === 'enter') {
    text += '\n\r';
  } else if (event.target.dataset.name === 'caps_lock') {
    changeRegister();
  } else if (event.target.dataset.name === 'ctrl_left') {
    ctrl = true;
  } else if (event.target.dataset.name === 'alt_left' && ctrl) {
    changeLanguage();
  } else if (event.target.dataset.name === 'win' || event.target.dataset.name === 'alt_right' || event.target.dataset.name === 'ctrl_right' || event.target.dataset.name === 'alt_left') { // заглушка
  } else {
    text += keyboardObject[event.target.parentNode.dataset.row][event.target.dataset.name][layout];
    ctrl = false;
  }
  textField.innerText = text;
}

keyboardObject.forEach((item, idx) => {
  const row = document.createElement('div');
  row.classList.add('row');
  row.dataset.row = idx;
  keyboard.appendChild(row);
  for (const elem in item) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.dataset.name = elem;
    if (elem === 'shift_left' || elem === 'shift_right') {
      button.addEventListener('mousedown', changeRegister);
      button.addEventListener('mouseup', changeRegister);
    } else {
      button.addEventListener('click', clickHandler);
    }
    button.innerText = item[elem][layout];
    if (item[elem].width) {
      button.style.width = item[elem].width;
    }
    row.appendChild(button);
  }
});
