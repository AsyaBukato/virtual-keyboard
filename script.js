import keyboardObject from './keyboard_object.js'

const body = document.querySelector('body')

const title = document.createElement('div')
title.classList.add('title')
title.innerHTML = 'Виртуальная клавиатура'

const textField = document.createElement('textarea')
textField.cols = '100'
textField.rows = '10'
textField.classList.add('text_field')

const keyboard = document.createElement('div')
keyboard.classList.add('keyboard')

body.appendChild(title)
body.appendChild(textField)
body.appendChild(keyboard)

let lang = 'ru_lower'

keyboardObject.forEach((item, idx) => {
  const row = document.createElement('div')
  row.classList.add('row')
  row.dataset.row = idx
  keyboard.appendChild(row)
  for (const elem in item) {
    const button = document.createElement('div')
    button.classList.add('button')
    button.dataset.name = elem
    button.addEventListener('click', clickHandler)
    button.innerText = item[elem][lang]
    if (item[elem].width) {
      button.style.width = item[elem].width
    }
    row.appendChild(button)
  }
})

let text = ''

function clickHandler (event) {
  if (event.target.dataset.name === 'backspace') {
    text = text.slice(0, -1)
  } else if (event.target.dataset.name === 'tab') {
    text = text + '    '
  } else {
    text = text + keyboardObject[event.target.parentNode.dataset.row][event.target.dataset.name][lang]
  }
  textField.innerText = text
}
