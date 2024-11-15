class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.countElement = container.querySelector('.time');
    this.countDown();
    this.reset();

    this.registerEvents();
  }



  reset() {
    this.setNewWord();
    this.countElement.textContent = this.setNewWord().length;
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }


  registerEvents() {
    const symbolCreate = document.querySelector('body')

    symbolCreate.onkeydown = (e) => {
      if(e.key === this.currentSymbol.textContent) {
        this.success()
      } else {
        this.fail()
      }
    }

  }

  countDown() {
    setInterval(() => {
      if (this.countElement.textContent > 0) {
        this.countElement.textContent--
      } else {
        this.fail()
        this.countElement.textContent = this.setNewWord().length
      }
    }, 1000);
  }


  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    return word;
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }




  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))
