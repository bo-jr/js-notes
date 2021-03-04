// const moveX = (element, amount, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const bodyBoundary = document.body.clientWidth;
//       const elRight = element.getBoundingClientRect().right;
//       const currLeft = element.getBoundingClientRect().left;
//       if (elRight + amount > bodyBoundary) {
//         reject({ bodyBoundary, elRight, amount });
//       }
//       else {
//         element.style.transform = `translateX(${currLeft + amount}px)`;
//         resolve();
//       }
//     }, delay);
//   });
// };

// async function animateRight(el) {
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
//   await moveX(el, 100, 1000)
// }

// const btn = document.querySelector('button');

// animateRight(btn).catch((err) => {
//   console.log("Reached all the way to the right")
// })

////////////////////////////////

// Sequential requests
// async function get3Pokemon() {
//   const poke1 = await axios.get('http://pokeapi.co/api/v2/pokemon/1') // has to run 1st
//   const poke2 = await axios.get('http://pokeapi.co/api/v2/pokemon/1') // has to run 2nd
//   const poke3 = await axios.get('http://pokeapi.co/api/v2/pokemon/1') // has to run 3rd
//   console.log(poke1.data)
//   console.log(poke2.data)
//   console.log(poke3.data)
// }

// get3Pokemon()

// Parallel requests
// async function get3Pokemon() {
//   const prom1 = axios.get('http://pokeapi.co/api/v2/pokemon/1')
//   const prom2 = axios.get('http://pokeapi.co/api/v2/pokemon/1')
//   const prom3 = axios.get('http://pokeapi.co/api/v2/pokemon/1')
//   const poke1 = await prom1
//   const poke2 = await prom2
//   const poke3 = await prom3

//   console.log(poke1.data)
//   console.log(poke2.data)
//   console.log(poke3.data)
// }

// get3Pokemon()

////////////////////////////////////
// Parallel requests with Promise.all
async function get3Pokemon() {
  const prom1 = axios.get('http://pokeapi.co/api/v2/pokemon/1')
  const prom2 = axios.get('http://pokeapi.co/api/v2/pokemon/1')
  const prom3 = axios.get('http://pokeapi.co/api/v2/pokemon/1')
  const results = await Promise.all([prom1, prom2, prom3])

  console.log(results)
}

get3Pokemon()
