const CharCounterApp = {
  data() {
    const rus = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
    const lat = "abcdefghijklmnopqrstuvwxyz"
    const digits = "0123456789"
    const alphabet = rus.toUpperCase() + rus + lat.toUpperCase() + lat + digits
    return {
      text: '',
      alphabet: new Map(alphabet.split('').map(letter=>[letter,0])),
      rs: rus.split(''),
      rb: rus.toUpperCase().split(''),
      ls: lat.split(''),
      lb: lat.toUpperCase().split(''),
      d: digits.split(''),
    }
  },
  watch: {
    // whenever question changes, this function will run
    text: function (newText, oldText) {
      this.alphabet.forEach( (value, char) => { this.alphabet.set(char, 0) }, this )
      newText.split('').forEach(char => { this.alphabet.set(char, this.alphabet.get(char)+1) }, this);
    }
  },
  created: function () {
    this.text = "Пример"
  }
}

Vue.createApp(CharCounterApp).mount('#char-counter')
