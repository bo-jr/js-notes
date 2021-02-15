const nums = [34, 35, 67, 54, 109, 102, 32, 9]

const words = ['dog', 'dig', 'log', 'bag', 'wag']

let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
]

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the Flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const odds = nums.filter(n => n % 2 === 1)
const evens = nums.filter(n => n % 2 === 0)
const bigNums = nums.filter(n => n > 50);

const goodBooks = books.filter(b => b.rating > 4.3)
const fantasyBooks = books.filter(b => {
  const result = b.genres.includes('fantasy')
  return result
})
const shortForm = books.filter(b => (
  b.genres.includes('short stories') || b.genres.includes('essays')
))

const query = 'The';
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase())
})

const all3Lets = words.every(word => word.length === 3)
const allEngInG = words.every(word => {
  const last = word.length - 1;
  return word[last] === 'g'
})

const someD = words.some(word => word[0] === 'd')

const allGoodBooks = books.every(book => book.rating > 3.5);

books.sort((a, b) => a.rating - b.rating)

const list = [3, 4, 5, 6, 7]
const product = list.reduce((total, currentVal) => {
  return total * currentVal
})

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64]
const maxGrade = grades.reduce((max, currentVal) => {
  if (currentVal > max) return currentVal
  return max
  // return Math.max(max, currentVal)
})

const tempArr = [10, 20, 30, 40, 50]
const res = tempArr.reduce((sum, currentVal) => {
  return sum + currentVal;
}, 50)

const votes = ['y', 'y', 'n', 'n', 'y', 'y', 'n']

const voteResults = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++
  } else {
    tally[val] = 1;
  }
  return tally
}, {})

const groupsByRatings = books.reduce((groupedBooks, book) => {
  key = Math.floor(book.rating);
  if (!groupedBooks[key]) {
    groupedBooks[key] = [];
  }
  groupedBooks[key].push(book)
  return groupedBooks
}, {})

// Examples of spread
const feline = {
  legs: 4,
  family: "Felidae"
}

const canine = {
  family: "Caninae",
  furry: true
}

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: "unpredictable"
}

const catDog = {
  ...canine,
  ...feline
}

// Examples of rest
function sum(...nums) {
  return nums.reduce((total, curVal) => {
    return total + curVal
  })
}

function fullName(first, last, ...titles) {
  console.log('first', first)
  console.log('last', last)
  console.log('titles', titles)
}

// fullName('john', 'smith', 'LOTR', 'Hobbit')

const multiply = (...nums) => (
  nums.reduce((total, curVal) => total * curVal)
)

// Destructuring Arrays
const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alophonce Simbu',
  'Jared Ward'
]

const [gold, silver, bronze] = raceResults
const [first, , , fourth] = raceResults
const [winner, ...others] = raceResults
const [tempWinner, , ...tempOthers] = raceResults

// Destructuring Objects
const runner = {
  xFirst: 'Eliud',
  xLast: 'Kipchoge',
  xCountry: 'Kenya',
  xTitle: 'Elder of the Order of the Golden Heart of Kenya'
}

const {xFirst, xLast, xTime, ...other} = runner;

// Nested Destructuring
const raceRes = [{
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya'
  }, 
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  }, 
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
]

const [{first: goldWinner}, {country}] = raceRes
const [, silverMedal] = raceRes;

// Destructuring parameters
function print(person) {
  const {xFirst, xLast, xTitle} = person;
  console.log(`${xFirst} ${xLast}`)
} // print(runner)

// above function can be also written as:
function anotherPrint({xFirst, xLast, xTitle}) {
  console.log(`${xFirst} ${xLast} ${xTitle}`)
} // anotherPrint(runner)

//example using an array instead of custom object
const resp = [
  'HTTP/1.1',
  '200 OK',
  'application/json'
]

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`)
}
