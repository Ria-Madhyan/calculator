"use strict";

// creating binders
var inputDisplay = document.querySelector('.history');
var outputDisplay = document.querySelector('.result');
var allClearButton = document.querySelector('#clear');
var percentButton = document.getElementById('n2');
var operationButtons = document.querySelectorAll('.operator');
var numberButtons = document.querySelectorAll('.number');
var negationNumber = document.getElementById('n1');
var decimalButton = document.querySelector('#n17');
var equalsButton = document.querySelector('operator--equal');
var output = document.querySelector('.output'); // const buttons = document.querySelectorAll('button')
// Initializing some variables

var prevValue = "";
var currentValue = "";
var prevOperation = "";
var currOperation = "";
var result = "";
var equalsFlag = false;
var backspaceFlag = true; // creating function for accepting numbers 

var handleNumber = function handleNumber(val) {
  outputDisplay.innerHTML += val;
}; //creating function for accepting operators


var handleOperation = function handleOperation(calc) {
  outputDisplay.innerHTML += calc;
}; //creating decimal function


var decimal = function decimal(dec) {
  outputDisplay.innerHTML += dec;
  decimalButton.removeEventListener('click');
}; //creating all clear function


var allClear = function allClear(nothing) {
  outputDisplay.innerHTML = "";
  inputDisplay.innerHTML = "";
  prevValue = "";
  currentValue = "";
  prevOperation = "";
  currOperation = "";
  result = "";
}; // creating function for all operations 
// 1. creating function for addition 


var add = function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}; // 2. creating function for subtraction 


var diff = function diff(num1, num2) {
  var diff = num1 - num2;
  return diff;
}; // 3. creating function for addition 


var prod = function prod(num1, num2) {
  var prod = num1 * num2;

  if (prod == -0) {
    // so that we get No negative sign for zero //
    return 0;
  }

  return prod;
}; // 4. creating function for addition 


var division = function division(num1, num2) {
  if (number2 === 0) {
    // as division by zero is not possible
    return "Can't divide by zero";
  }

  var division = num1 / num2;
  return division;
}; ////* calculate func for (+, -, x, /, %) *////


var calculate = function calculate() {
  currentValue = outputDisplay.innerHTML;

  if (typeof currentValue.charAt(currentValue.length - 1) != "number" && outputDisplay.innerHTML.charAt(0) == "=") {
    return;
  }

  inputDisplay.innerHTML += outputDisplay.innerHTML;

  if (currOperation == '%') {
    prevOperation = currOperation;
    /* As the percent operation will receive only one input, setting the operator correctly */
  }

  switch (prevOperation) {
    case '+':
      /* Addition operation */
      result = addition(prevValue, currentValue);
      result = numFormat(result);
      /* For repesenting the result with commas */

      outputDisplay.innerHTML = "= " + result;
      prevValue = result;
      inputDisplay.style.fontSize = "1em";
      break;

    case "-":
      /* Subtraction operation */
      // console.log("subtraction");      
      result = subtraction(prevValue, currentValue);
      result = numFormat(result);
      /* For repesenting the result with commas */

      outputDisplay.innerHTML = "= " + result;
      prevValue = result;
      inputDisplay.style.fontSize = "1em"; // inputDisplay.style.fontSize = (inputDisplay.innerHTML.length >15)?"0.5em":"1em";

      break;

    case "*":
      /* Multiply operation */
      // console.log("multiplication");      
      result = multiply(prevValue, currentValue);
      result = numFormat(result);
      /* For repesenting the result with commas */

      outputDisplay.innerHTML = "= " + result;
      prevValue = result;
      inputDisplay.style.fontSize = "1em"; // inputDisplay.style.fontSize = (inputDisplay.innerHTML.length >15)?"0.5em":"1em";

      break;

    case "/":
      /* Division operation */
      // console.log("division");      
      result = divide(prevValue, currentValue);

      if (result != "Can't divide by zero") {
        result = numFormat(result);
        /* For repesenting the result with commas */
      }

      outputDisplay.innerHTML = "= " + result;
      prevValue = result;
      inputDisplay.style.fontSize = "1em"; // inputDisplay.style.fontSize = (inputDisplay.innerHTML.length >15)?"0.5em":"1em";

      break;

    case '%':
      /* Percent operation */
      // console.log("Percentage");
      result = divide(currentValue, "100");
      result = numFormat(result);
      /* For repesenting the result with commas */

      outputDisplay.innerHTML = "= " + result;
      prevValue = result;
      inputDisplay.style.fontSize = "1em"; // inputDisplay.style.fontSize = (inputDisplay.innerHTML.length >15)?"0.5em":"1em";

      break;

    default:
      outputDisplay.innerHTML = "Not a valid sign";
      break;
  }
}; // creating equals function 


var equalsClick = function equalsClick() {
  calculate();
  /* To perform the required operation */
};