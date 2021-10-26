// Part 1
// String.prototype.yell = function() {
//   return `OMG!!! ${this.toUpperCase()}!!! hehe`
// };

// Factory Functions
// function hex(r, g, b) {
//   return '#'+ ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r}, ${g}, ${b})`;
// }

// // console.log(hex(255, 100, 25))
// // console.log(rgb(255, 100, 25))

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb =  function() {
//     const {r,g,b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   }
//   color.hex = function() {
//     const {r,g,b} = this;
//     return '#'+ ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
//   return color
// }

// const gs = makeColor(100, 200, 50);
// gs.hex()



// Part 2
// Constructor Functions
// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   console.log(this)
// }

// Color.prototype.rgb = function() {
//   const {r,g,b} = this;
//   return `rgb(${r}, ${g}, ${b})`;
// }

// Color.prototype.hex = function() {
//   const {r,g,b} = this;
//   return '#'+ ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function(a=1.0) {
//   const {r,g,b} = this;
//   return `rgba(${r}, ${g}, ${b}, ${a})`
// }

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(25, 45, 65);

// // color1.hex()
// // color2.hex()



// Part 3
// JS Classes -Syntactical Sugar
// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name
//   }

//   innerRGB() {
//     const {r, g, b} = this;
//     return `${r}, ${g}, ${b}`
//   }

//   rgb() {
//     return `rgb(${this.innerRGB()})`
//   }

//   hex() {
//     const {r, g, b} = this;
//     return '#'+ ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }

//   rgba(a = 1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`
//   }
// }

// const black = new Color(0, 0, 0, 'black')
// const white = new Color(255, 255, 255, 'white')



// Part 4
// More with Classes
// usage: hsl(130, 50%, 80%)
// Skipped



// Part 5
// Extends, Super, Subclasses
class Pet {
  constructor(name, age) {
    console.log('In Pet Constructor')
    this.name = name
    this.age = age
  }

  eat() {
    return `${this.name} is eating`
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log('In Cat Constructor')
    super(name, age) // this calls the constructor from Pet class
    this.livesLeft = livesLeft;
  }
  meow() {
    return `Meow`
  }
}

class Dog extends Pet {
  bark() {
    return `Woof`
  }
  eat() {
    return `${this.name} is chomping down his food` // override
  }
}

const monty = new Cat('monty', 9)
const wyatt = new Dog('wyatt', 10)
