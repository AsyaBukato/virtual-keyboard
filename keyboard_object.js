const keyboardObject = [
  { // первый ряд
    backqoute: {
      en_lower: '`',
      en_upper: '~',
      ru_lower: 'ё',
      ru_upper: 'Ё'
    },
    digit1: {
      en_lower: '1',
      en_upper: '!',
      ru_lower: '1',
      ru_upper: '!'
    },
    digit2: {
      en_lower: '2',
      en_upper: '@',
      ru_lower: '2',
      ru_upper: '"'
    },
    digit3: {
      en_lower: '3',
      en_upper: '#',
      ru_lower: '3',
      ru_upper: '№'
    },
    digit4: {
      en_lower: '4',
      en_upper: '$',
      ru_lower: '4',
      ru_upper: ';'
    },
    digit5: {
      en_lower: '5',
      en_upper: '%',
      ru_lower: '5',
      ru_upper: '%'
    },
    digit6: {
      en_lower: '6',
      en_upper: '^',
      ru_lower: '6',
      ru_upper: ':'
    },
    digit7: {
      en_lower: '7',
      en_upper: '&',
      ru_lower: '7',
      ru_upper: '?'
    },
    digit8: {
      en_lower: '8',
      en_upper: '*',
      ru_lower: '8',
      ru_upper: '*'
    },
    digit9: {
      en_lower: '9',
      en_upper: '(',
      ru_lower: '9',
      ru_upper: '('
    },
    digit0: {
      en_lower: '0',
      en_upper: ')',
      ru_lower: '0',
      ru_upper: ')'
    },
    minus: {
      en_lower: '-',
      en_upper: '_',
      ru_lower: '-',
      ru_upper: '_'
    },
    plus: {
      en_lower: '=',
      en_upper: '+',
      ru_lower: '=',
      ru_upper: '+'
    },
    backspace: {
      en_lower: 'Backspace',
      en_upper: 'Backspace',
      ru_lower: 'Backspace',
      ru_upper: 'Backspace',
      width: '100px'
    }
  },
  { // второй ряд
    tab: {
      en_lower: 'Tab',
      en_upper: 'Tab',
      ru_lower: 'Tab',
      ru_upper: 'Tab',
      width: '50px'
    },
    key_q: {
      en_lower: 'q',
      en_upper: 'Q',
      ru_lower: 'й',
      ru_upper: 'Й'
    },
    key_w: {
      en_lower: 'w',
      en_upper: 'W',
      ru_lower: 'ц',
      ru_upper: 'Ц'
    },
    key_e: {
      en_lower: 'e',
      en_upper: 'E',
      ru_lower: 'у',
      ru_upper: 'У'
    },
    key_r: {
      en_lower: 'r',
      en_upper: 'R',
      ru_lower: 'к',
      ru_upper: 'К'
    },
    key_t: {
      en_lower: 't',
      en_upper: 'T',
      ru_lower: 'е',
      ru_upper: 'Е'
    },
    key_y: {
      en_lower: 'y',
      en_upper: 'Y',
      ru_lower: 'н',
      ru_upper: 'Н'
    },
    key_u: {
      en_lower: 'u',
      en_upper: 'U',
      ru_lower: 'г',
      ru_upper: 'Г'
    },
    key_i: {
      en_lower: 'i',
      en_upper: 'I',
      ru_lower: 'ш',
      ru_upper: 'Ш'
    },
    key_o: {
      en_lower: 'o',
      en_upper: 'O',
      ru_lower: 'щ',
      ru_upper: 'Щ'
    },
    key_p: {
      en_lower: 'p',
      en_upper: 'P',
      ru_lower: 'з',
      ru_upper: 'З'
    },
    bracket_left: {
      en_lower: '[',
      en_upper: '{',
      ru_lower: 'х',
      ru_upper: 'Х'
    },
    bracket_right: {
      en_lower: ']',
      en_upper: '}',
      ru_lower: 'ъ',
      ru_upper: 'Ъ'
    },
    backslash: {
      en_lower: '\\',
      en_upper: '|',
      ru_lower: '\\',
      ru_upper: '/'
    },
    delete: {
      en_lower: 'Del',
      en_upper: 'Del',
      ru_lower: 'Del',
      ru_upper: 'Del'
    }
  },
  { // третий ряд
    caps_lock: {
      en_lower: 'CapsLock',
      en_upper: 'CapsLock',
      ru_lower: 'CapsLock',
      ru_upper: 'CapsLock',
      width: '100px'
    },
    key_a: {
      en_lower: 'a',
      en_upper: 'A',
      ru_lower: 'ф',
      ru_upper: 'Ф'
    },
    key_s: {
      en_lower: 's',
      en_upper: 'S',
      ru_lower: 'ы',
      ru_upper: 'Ы'
    },
    key_d: {
      en_lower: 'd',
      en_upper: 'D',
      ru_lower: 'в',
      ru_upper: 'В'
    },
    key_f: {
      en_lower: 'f',
      en_upper: 'F',
      ru_lower: 'а',
      ru_upper: 'А'
    },
    key_g: {
      en_lower: 'g',
      en_upper: 'G',
      ru_lower: 'п',
      ru_upper: 'П'
    },
    key_h: {
      en_lower: 'h',
      en_upper: 'H',
      ru_lower: 'р',
      ru_upper: 'Р'
    },
    key_j: {
      en_lower: 'j',
      en_upper: 'J',
      ru_lower: 'о',
      ru_upper: 'О'
    },
    key_k: {
      en_lower: 'k',
      en_upper: 'K',
      ru_lower: 'л',
      ru_upper: 'Л'
    },
    key_l: {
      en_lower: 'l',
      en_upper: 'L',
      ru_lower: 'д',
      ru_upper: 'Д'
    },
    semicolon: {
      en_lower: ';',
      en_upper: ':',
      ru_lower: 'ж',
      ru_upper: 'Ж'
    },
    quotes: {
      en_lower: '\'',
      en_upper: '"',
      ru_lower: 'э',
      ru_upper: 'Э'
    },
    enter: {
      en_lower: 'Enter',
      en_upper: 'Enter',
      ru_lower: 'Enter',
      ru_upper: 'Enter',
      width: '90px'
    }
  },
  { // четвертый ряд
    shift_left: {
      en_lower: 'Shift',
      en_upper: 'Shift',
      ru_lower: 'Shift',
      ru_upper: 'Shift',
      width: '100px'
    },
    key_z: {
      en_lower: 'z',
      en_upper: 'Z',
      ru_lower: 'я',
      ru_upper: 'Я'
    },
    key_x: {
      en_lower: 'x',
      en_upper: 'X',
      ru_lower: 'ч',
      ru_upper: 'Ч'
    },
    key_c: {
      en_lower: 'c',
      en_upper: 'C',
      ru_lower: 'с',
      ru_upper: 'С'
    },
    key_v: {
      en_lower: 'v',
      en_upper: 'V',
      ru_lower: 'м',
      ru_upper: 'М'
    },
    key_b: {
      en_lower: 'b',
      en_upper: 'B',
      ru_lower: 'и',
      ru_upper: 'И'
    },
    key_n: {
      en_lower: 'n',
      en_upper: 'N',
      ru_lower: 'т',
      ru_upper: 'Т'
    },
    key_m: {
      en_lower: 'm',
      en_upper: 'M',
      ru_lower: 'ь',
      ru_upper: 'Ь'
    },
    comma: {
      en_lower: ',',
      en_upper: '<',
      ru_lower: 'б',
      ru_upper: 'Б'
    },
    dot: {
      en_lower: '.',
      en_upper: '>',
      ru_lower: 'ю',
      ru_upper: 'Ю'
    },
    slash: {
      en_lower: '/',
      en_upper: '?',
      ru_lower: '.',
      ru_upper: ','
    },
    top_arrow: {
      en_lower: '▲',
      en_upper: '▲',
      ru_lower: '▲',
      ru_upper: '▲'
    },
    shift_right: {
      en_lower: 'Shift',
      en_upper: 'Shift',
      ru_lower: 'Shift',
      ru_upper: 'Shift',
      width: '90px'
    }
  },
  { // пятый ряд
    ctrl_left: {
      en_lower: 'Ctrl',
      en_upper: 'Ctrl',
      ru_lower: 'Ctrl',
      ru_upper: 'Ctrl'
    },
    win: {
      en_lower: 'Win',
      en_upper: 'Win',
      ru_lower: 'Win',
      ru_upper: 'Win'
    },
    alt_left: {
      en_lower: 'Alt',
      en_upper: 'Alt',
      ru_lower: 'Alt',
      ru_upper: 'Alt'
    },
    space: {
      en_lower: ' ',
      en_upper: ' ',
      ru_lower: ' ',
      ru_upper: ' ',
      width: '372px'
    },
    alt_right: {
      en_lower: 'Alt',
      en_upper: 'Alt',
      ru_lower: 'Alt',
      ru_upper: 'Alt'
    },
    left_arrow: {
      en_lower: '◄',
      en_upper: '◄',
      ru_lower: '◄',
      ru_upper: '◄'
    },
    bottom_arrow: {
      en_lower: '▼',
      en_upper: '▼',
      ru_lower: '▼',
      ru_upper: '▼'
    },
    right_arrow: {
      en_lower: '►',
      en_upper: '►',
      ru_lower: '►',
      ru_upper: '►'
    },
    ctrl_right: {
      en_lower: 'Ctrl',
      en_upper: 'Ctrl',
      ru_lower: 'Ctrl',
      ru_upper: 'Ctrl'
    }
  }
]

export default keyboardObject
