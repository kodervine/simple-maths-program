// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

// Select global variables
const alertItem = document.querySelector('.red-alert')
const numFirst = document.querySelector('#num')
const numSecond = document.querySelector('#numItem')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const add = document.querySelector('.add')
const subtract = document.querySelector('.subtract')
const result = document.querySelector('.result')


// Functions for multiply and divide
function multiplyItems() {
  multiply.addEventListener('click', function (e) {
    e.preventDefault()
    // Confirm if input is empty before continuing
    alertEmptyInput()
    const multiplyResult = numFirst.value * numSecond.value;

    // Create HTML and append to client side
    const newList = document.createElement('li')
    newList.innerText = `${numFirst.value} multiplies ${numSecond.value} is ${multiplyResult}`
    result.appendChild(newList)
    numFirst.value = '';
    numSecond.value = '';
  })
}
multiplyItems()

// Function divide items
function divideItems() {
  divide.addEventListener('click', function (e) {
    e.preventDefault()
    // Confirm if input is empty before continuing
    alertEmptyInput()
    const divideResult = numFirst.value / numSecond.value;

    // Create HTML and append to client side
    const newList = document.createElement('li')
    newList.innerText = `${numFirst.value} divided by ${numSecond.value} is ${divideResult}`
    result.appendChild(newList);
    numFirst.value = '';
    numSecond.value = '';
  })
}

divideItems()

// Function add items
function addItems() {
  add.addEventListener('click', function (e) {
    e.preventDefault()
    // Confirm if input is empty before continuing
    alertEmptyInput()

    const addResult = parseInt(numFirst.value) + parseInt(numSecond.value);

    // Create HTML and append to client side
    const newList = document.createElement('li')
    newList.innerText = `${numFirst.value} plus ${numSecond.value} equals ${addResult}`
    result.appendChild(newList);
    numFirst.value = '';
    numSecond.value = '';
  })
}

addItems()
// Function subract items
function subtractItems() {
  subtract.addEventListener('click', function (e) {
    e.preventDefault()
    // Confirm if input is empty before continuing
    alertEmptyInput()
    const subtractResult = numFirst.value - numSecond.value;

    // Create HTML and append to client side
    const newList = document.createElement('li')
    newList.innerText = `${numFirst.value} minus ${numSecond.value} is ${subtractResult}`
    result.appendChild(newList);
    numFirst.value = '';
    numSecond.value = '';
  })
}

subtractItems()

// Set timeout function 
function alertEmptyInput() {
  if (numFirst.value === '' || numSecond.value === '' || numFirst.value === NaN || numSecond.value === NaN) {
    alertItem.classList.add('alert')
    setTimeout(() => {
      alertItem.classList.remove('alert')
    }, 2000);
    newList.innerText = '';
  }

}