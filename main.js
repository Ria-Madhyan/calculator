// creating binders
// const inputDisplay = document.querySelector('.history')
// const outputDisplay = document.querySelector('.result')

const allClearButton = document.querySelector('#clear');
const percentButton = document.getElementById('n2');
const operationButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const negationNumber = document.getElementById('n1')
const decimalButton = document.querySelector('#n17')
const equalsButton = document.querySelector('operator--equal');

const output = document.querySelector('.output')
// const buttons = document.querySelectorAll('button')

const handleNumber = (val) => {
  if (output.innerHTML == 0 ) {
    output.innerHTML(val)
  }
  else {
    output.innerText += (val)
  }
}

