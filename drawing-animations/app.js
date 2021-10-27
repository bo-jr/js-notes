const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter)

let duration = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', (perimeter * timeRemaining) / duration - perimeter)
  },
  onComplete() {
    console.log('Timer is complete');
  }
});





// ways to find `this`

// 1 way - arrow function
// console.log(this)
// const printThis = () => {
//   console.log(this)
// }
// printThis()
//
// const colors = {
//   printColor() {
//     console.log(this)
//     const printThis = () => {
//       console.log(this)
//     }
//     printThis()
//   }
// }
// colors.printColor()

// 2 way - bind, call, apply on the function
// const printThis = function() {
//   console.log(this)
// }
// printThis.call({ color: 'red' })
// printThis()

// 3 way - all other cases - equal to whatever is to the left of the . in the method call
// const colors = {
//   printColor() {
//     console.log(this)
//   }
// }
// colors.printColor()
