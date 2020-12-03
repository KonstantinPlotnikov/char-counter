const CharCounterApp = {
  data() {
    const RUS = 2
    const LAT = 2
    const SYM = 2
    const rs = new Map([
      ['а', 1 * RUS],
      ['б', 1 * RUS],
      ['в', 1 * RUS],
      ['г', 1 * RUS],
      ['д', 1 * RUS],
      ['е', 1 * RUS],
      ['ё', 1 * RUS],
      ['ж', 1 * RUS],
      ['з', 1 * RUS],
      ['и', 1 * RUS],
      ['й', 1 * RUS],
      ['к', 1 * RUS],
      ['л', 1 * RUS],
      ['м', 1 * RUS],
      ['н', 1 * RUS],
      ['о', 1 * RUS],
      ['п', 1 * RUS],
      ['р', 1 * RUS],
      ['с', 1 * RUS],
      ['т', 1 * RUS],
      ['у', 1 * RUS],
      ['ф', 1 * RUS],
      ['х', 1 * RUS],
      ['ц', 1 * RUS],
      ['ч', 1 * RUS],
      ['ш', 1 * RUS],
      ['щ', 1 * RUS],
      ['ъ', 1 * RUS],
      ['ы', 1 * RUS],
      ['ь', 1 * RUS],
      ['э', 1 * RUS],
      ['ю', 1 * RUS],
      ['я', 1 * RUS]
    ])
    const rb = new Map([
      ['А', 1 * RUS],
      ['Б', 1 * RUS],
      ['В', 1 * RUS],
      ['Г', 1 * RUS],
      ['Д', 1 * RUS],
      ['Е', 1 * RUS],
      ['Ё', 1 * RUS],
      ['Ж', 1 * RUS],
      ['З', 1 * RUS],
      ['И', 1 * RUS],
      ['Й', 1 * RUS],
      ['К', 1 * RUS],
      ['Л', 1 * RUS],
      ['М', 1 * RUS],
      ['Н', 1 * RUS],
      ['О', 1 * RUS],
      ['П', 1 * RUS],
      ['Р', 1 * RUS],
      ['С', 1 * RUS],
      ['Т', 1 * RUS],
      ['У', 1 * RUS],
      ['Ф', 1 * RUS],
      ['Х', 1 * RUS],
      ['Ц', 1 * RUS],
      ['Ч', 1 * RUS],
      ['Ш', 1 * RUS],
      ['Щ', 1 * RUS],
      ['Ъ', 1 * RUS],
      ['Ы', 1 * RUS],
      ['Ь', 1 * RUS],
      ['Э', 1 * RUS],
      ['Ю', 1 * RUS],
      ['Я', 1 * RUS]
    ])
    const ls = new Map([
      ['a', 1 * LAT],
      ['b', 1 * LAT],
      ['c', 1 * LAT],
      ['d', 1 * LAT],
      ['e', 1 * LAT],
      ['f', 1 * LAT],
      ['g', 1 * LAT],
      ['h', 1 * LAT],
      ['i', 1 * LAT],
      ['j', 1 * LAT],
      ['k', 1 * LAT],
      ['l', 1 * LAT],
      ['m', 1 * LAT],
      ['n', 1 * LAT],
      ['o', 1 * LAT],
      ['p', 1 * LAT],
      ['q', 1 * LAT],
      ['r', 1 * LAT],
      ['s', 1 * LAT],
      ['t', 1 * LAT],
      ['u', 1 * LAT],
      ['v', 1 * LAT],
      ['w', 1 * LAT],
      ['x', 1 * LAT],
      ['y', 1 * LAT],
      ['z', 1 * LAT]
    ])
    const lb = new Map([
      ['A', 1 * LAT],
      ['B', 1 * LAT],
      ['C', 1 * LAT],
      ['D', 1 * LAT],
      ['E', 1 * LAT],
      ['F', 1 * LAT],
      ['G', 1 * LAT],
      ['H', 1 * LAT],
      ['I', 1 * LAT],
      ['J', 1 * LAT],
      ['K', 1 * LAT],
      ['L', 1 * LAT],
      ['M', 1 * LAT],
      ['N', 1 * LAT],
      ['O', 1 * LAT],
      ['P', 1 * LAT],
      ['Q', 1 * LAT],
      ['R', 1 * LAT],
      ['S', 1 * LAT],
      ['T', 1 * LAT],
      ['U', 1 * LAT],
      ['V', 1 * LAT],
      ['W', 1 * LAT],
      ['X', 1 * LAT],
      ['Y', 1 * LAT],
      ['Z', 1 * LAT],
    ])
    const s = new Map([
      [' ', 1 * SYM],
      ['0', 1 * SYM],
      ['1', 1 * SYM],
      ['2', 1 * SYM],
      ['3', 1 * SYM],
      ['4', 1 * SYM],
      ['5', 1 * SYM],
      ['6', 1 * SYM],
      ['7', 1 * SYM],
      ['8', 1 * SYM],
      ['9', 1 * SYM],
      ['(', 1 * SYM],
      [')', 1 * SYM],
      [',', 1 * SYM],
      ['.', 1 * SYM],
      ['-', 1 * SYM],
      ['+', 1 * SYM],
      ['*', 1 * SYM],
      ['/', 1 * SYM]
    ])
    const alphabet_max = new Map([...rs, ...rb, ...ls, ...lb, ...s])
    var alphabet = new Map()
    alphabet_max.forEach( (value, char) => { alphabet.set(char, 0) } )
    return {
      text: '',
      alphabet: alphabet,
      alphabet_max: alphabet_max,
      rs: [...rs.keys()],
      rb: [...rb.keys()],
      ls: [...ls.keys()],
      lb: [...lb.keys()],
      s: [...s.keys()],
    }
  },
  watch: {
    text: function (newText, oldText) {
      this.alphabet.forEach( (value, char) => { this.alphabet.set(char, 0) }, this )
      newText.split('').forEach(char => { this.alphabet.set(char, this.alphabet.get(char)+1) }, this);
    }
  },
  created: function () {
    this.text = "Небольшой пример текста, в котором есть избыточное использование символов"
  }
}

Vue.createApp(CharCounterApp).mount('#char-counter')
