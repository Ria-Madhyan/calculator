"use strict";

// creating binders
// const inputDisplay = document.querySelector('.history')
// const outputDisplay = document.querySelector('.result')
var allClearButton = document.querySelector('#clear');
var percentButton = document.getElementById('n2');
var operationButtons = document.querySelectorAll('.operator');
var numberButtons = document.querySelectorAll('.number');
var negationNumber = document.getElementById('n1');
var decimalButton = document.querySelector('#n17');
var equalsButton = document.querySelector('operator--equal');
var output = document.querySelector('.output'); // const buttons = document.querySelectorAll('button')

var handleNumber = function handleNumber(val) {
  if (output.innertext == 0) {
    output.innerText(val);
  } else {
    output.innerText += val;
  }
};