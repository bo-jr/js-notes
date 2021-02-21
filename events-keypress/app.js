const input = document.querySelector('#username')

input.addEventListener('keydown', function(e) {
  console.log("KEY DOWN!")
})

input.addEventListener('keyup', function(e) {
  console.log("KEY UP!")
})

input.addEventListener('keypress', function(e) {
  console.log("KEYPRESS!")
})

const addItemInput = document.querySelector("#addItem")
const itemsUL = document.querySelector("#items")

addItemInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    if (!this.value) return
    const newItemText = this.value
    const newItem = document.createElement('li')
    newItem.innerText = newItemText
    itemsUL.append(newItem)
    this.value = ''
  }
})

const form = document.querySelector('#signup-form')

const creditCardInput = document.querySelector('#credit-card')
const termsCheckbox = document.querySelector('#terms')
const paymentDropdown = document.querySelector('#payment-form')

form.addEventListener('submit', function(e) {
  console.log('cc number: ', creditCardInput.value)
  console.log('terms: ', termsCheckbox.checked)
  console.log('paymentForm: ', paymentDropdown.value)
  e.preventDefault() // prevents from refreshing the page
})

// const formData = {}
// creditCardInput.addEventListener('input', e => {
//   formData['cc'] = e.target.value
// })

// termsCheckbox.addEventListener('input', e => {
//   formData['terms'] = e.target.value
// })

// paymentDropdown.addEventListener('input', e => {
//   formData['payment type'] = e.target.value
// })

const formData = {}
for (let input of [creditCardInput, termsCheckbox, paymentDropdown]) {
  input.addEventListener('change', ({target}) => {
    const {name, type, value, checked} = target
    formData[name] = type ==='checkbox' ? checked : value
    // formData[e.target.name] = e.target.value
  })
}
