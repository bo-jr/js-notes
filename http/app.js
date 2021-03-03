// gets better as you go down

// fetch('https://swapi.dev/api/planets/')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Status Code Error: ${response.status}`)
//     }
//     return response.json()
//   })
//   .then((response) => {
//     for (let planet of response.results) {
//       console.log(planet.name)
//     }
//     const nextURL = response.next
//     return fetch(nextURL)
//   })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Status Code Error: ${response.status}`)
//     }
//     return response.json()
//   })
//   .then((response) => {
//     for (let planet of response.results) {
//       console.log(planet.name)
//     }
//     const nextURL = response.next
//     return fetch(nextURL)
//   })
//   .catch((err) => {
//   console.log('fetch failed')
//   console.log(err)
// })

///////////////////////////////////////////////////////////////
// fetch

// const checkStatusAndParse = (response) => {
//   if (!response.ok) {
//     throw new Error(`Status Code Error: ${response.status}`)
//   }
//   return response.json()
// }

// const printPlanets = (response) => {
//   console.log('Loading 10 more planets...')
//   for (let planet of response.results) {
//     console.log(planet.name)
//   }
//   return Promise.resolve(response)
// }

// const fetchNextPlanets = (url) => {
//   return fetch(url.next)
// }

// fetch('https://swapi.dev/api/planets/')
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .catch((err) => {
//   console.log('fetch failed')
//   console.log(err)
// })

/////////////////////////////////////////////////////////////////
// using axios - unlike fetch, it parses it for us

// axios.get('https://swapi.dev/api/planets/').then((res) => {
//   console.log(res.data)
// }).catch((err) => {
//   console.log(err)
// })

// repeating  what we did up there
// axios
//   .get('https://swapi.dev/api/planets/')
//   .then(({ data }) => {
//     for (let planet of data.results) {
//       console.log(planet.name)
//     }
//     return axios.get(data.next)
//   })
//   .then(({ data }) => {
//     for (let planet of data.results) {
//       console.log(planet.name)
//     }
//     return axios.get(data.next)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// making the previous block again but w functions
const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return axios.get(url)
}

const printPlanets = ({ data }) => {
  for (let planet of data.results) {
    console.log(planet.name)
  }
  return Promise.resolve(data.next)
}

axios
  .get('https://swapi.dev/api/planets/')
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log(err)
  })
