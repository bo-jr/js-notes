// const willGetYouADog = new Promise((resolve, reject) => {
//     const rand = Math.random()
//     if (rand < 0.5) {
//         resolve()
//     }
//     else {
//         reject()
//     }
// })

// // runs when resolve()
// willGetYouADog.then(() => {
//     console.log('YAY WE GOT A DOG!!!!')
// })

// // runs whhen reject()
// willGetYouADog.catch(() => {
//     console.log(':( NO DOG')
// })

// // // // // // // //
// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random()
//       if (rand < 0.5) {
//         resolve()
//       }
//       else {
//         reject()
//       }
//     }, 5000)
//   })
// }

// makeDogPromise()
//   .then(() => {
//     console.log('Yay we got a dog')
//   })
//   .catch(() => {
//     console.log('No dog today...')
//   })

// // // // // // // //
const fakeRequest = (url) => {
  return new Promise((resolve, request) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          {id: 1, username: 'Bilbo' },
          {id: 5, username: 'Frodo' }
        ],
        '/about': 'This is the about page!'
      }
      const data = pages[url]
      if (data) {
        resolve({ status: 200, data })
      } else {
        reject({ status: 404 })
      }
    }, 3000)
  })
}

fakeRequest('/users')
  .then((res) => {
    console.log('Status Code:', res.status)
    console.log('Data:', res.data)
  })
  .catch((res) => {
    console.log(res.status)
    console.log('failed')
  });

fakeRequest('/dogs')
  .then((res) => {
    console.log('Status Code:', res.status)
    console.log('Data:', res.data)
  })
  .catch((res) => {
    console.log(res.status)
    console.log('failed')
  });
