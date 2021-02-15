// const add = function(x, y) {
//   return x + y
// }

const math = {
  // one way to create method
  add: function(x, y) {
    return x + y
  }, // another way to create it
  multiply(x, y) {
    return x * y
  }
}

// this
const person = {
  first: 'Jim',
  last: 'Raynor',
  nickName: 'Jimmy',
  fullName() {
    const {
      first, last, nickName
    } = this;
    return `${first} ${last} AKA ${nickName}`
  },
  printBio() {
    console.log(this)
    const fullName = this.fullName()
    console.log(`${fullName} is a person`)
  },
  laugh: () => { // take note of arroy function
    console.log(this); // notice how the scope of `this` is the window and not Jimmy
    console.log(`${this.nickName} says Hello~`)
  }
}

const annoyer = {
  phrases: ['lit', 'bop'],
  pickPhrase() {
    const {phrases} = this // destructuring
    // console.log(`Phrases's length ${phrases.length}`)
    const idx = Math.floor(Math.random() * phrases.length)
    return phrases[idx]
  },
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase())
    }, 3000)
    console.log(`timerId = ${this.timerId}`)
  },
  stop() {
    clearInterval(this.timerId)
    console.log("Over!")
  }
}

// more examples of `this`
// const suits = ['hearts', 'diamonds', 'spades', 'clubs']
// const values = 'A,2,3,4,5,6,7,8,9,10,J,Q,K'

// function makeDeck() {
//   const deck = [];
//   const suits = ['hearts', 'diamonds', 'spades', 'clubs']
//   const values = 'A,2,3,4,5,6,7,8,9,10,J,Q,K'

//   for (let value of values.split(',')) {
//     for (let suit of suits) {
//       deck.push({
//         value, suit
//       })
//     }
//   }
//   return deck;
// }

// function drawCard(deck) {
//   return deck.pop()
// }

// const myDeck = makeDeck()
// const card1 = drawCard(myDeck)

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
  initializeDeck() {
    const {suits, values, deck} = this 
    
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value, suit
        })
      }
    }
  },
  drawCard() {
    const card = this.deck.pop()
    this.drawnCards.push(card)
    return card
  },
  drawMultiple(numCards) {
    const cards = []
    for(let i = 0; i < numCards; i++) {
      cards.push(this.drawCard())
    }
    return cards
  },
  shuffle() {
    const {deck} = this
    // loop over array backwards
    console.log(deck)
    for (let i = deck.length - 1; i > 0; i--) {
      // pick random index before current element
      var j = Math.floor(Math.random() * (i + 1))
      // swap
      let temp = deck[i]
      console.log(deck[i] + ' ' + deck[j])
      deck[i] = deck[j]
      deck[j] = temp
      console.log(deck[i] + ' ' + deck[j])
    }
  }
}

// make into a factory
const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
    initializeDeck() {
      const {suits, values, deck} = this 
      
      for (let value of values.split(',')) {
        for (let suit of suits) {
          deck.push({
            value, suit
          })
        }
      }
    },
    drawCard() {
      const card = this.deck.pop()
      this.drawnCards.push(card)
      return card
    },
    drawMultiple(numCards) {
      const cards = []
      for(let i = 0; i < numCards; i++) {
        cards.push(this.drawCard())
      }
      return cards
    },
    shuffle() {
      const {deck} = this
      // loop over array backwards
      console.log(deck)
      for (let i = deck.length - 1; i > 0; i--) {
        // pick random index before current element
        var j = Math.floor(Math.random() * (i + 1))
        // swap
        let temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
      }
    }
  }
}

const theDeck = makeDeck()
theDeck.initializeDeck()
theDeck.shuffle()
