// creating binders
const inputDisplay = document.querySelector('.history')
const outputDisplay = document.querySelector('.result')

const allClearButton = document.querySelector('#clear');
const percentButton = document.getElementById('n2');
const operationButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const negationNumber = document.getElementById('n1')
const decimalButton = document.querySelector('#n17')
const equalsButton = document.querySelector('operator--equal');

const output = document.querySelector('.output')
// const buttons = document.querySelectorAll('button')


// Initializing some variables
let prevValue = "";
let currentValue = "";
let prevOperation = "";
let currOperation = "";
let result = "";
let equalsFlag = false;
let backspaceFlag = true;


// creating function for accepting numbers 
const handleNumber = (val) => {
  outputDisplay.innerHTML += (val)
}

//creating function for accepting operators
const handleOperation = (calc) => {
  outputDisplay.innerHTML += (calc)
}

//creating decimal function
const decimal = (dec) => {
  outputDisplay.innerHTML += (dec)
  decimalButton.removeEventListener('click')

}




//creating all clear function
const allClear = (nothing) => {
  outputDisplay.innerHTML = ""
  inputDisplay.innerHTML = ""
  prevValue = "";
  currentValue = "";
  prevOperation = "";
  currOperation = "";
  result = "";
}


// creating function for all operations 

// 1. creating function for addition 
const add = (num1, num2) => {
  const sum = num1+num2
  return sum 
}

// 2. creating function for subtraction 
const diff = (num1, num2) => {
  const diff = num1-num2
  return diff 
}

// 3. creating function for addition 
const prod = (num1, num2) => {
  const prod = num1*num2
  if (prod == -0){ // so that we get No negative sign for zero //
    return 0;
  }
  return prod 
}

// 4. creating function for addition 
const division = (num1, num2) => {
  
  if(number2 === 0){ // as division by zero is not possible
    return "Can't divide by zero";
  }
  const division = num1/num2
  return division 
}


////* calculate func for (+, -, x, /, %) *////
const calculate = () => {
  currentValue = outputDisplay.innerHTML;
  if(typeof(currentValue.charAt(currentValue.length-1)) != "number" && outputDisplay.innerHTML.charAt(0) == "="){
   return ;
  }
   inputDisplay.innerHTML += outputDisplay.innerHTML;  
   if(currOperation == '%') {
      prevOperation = currOperation; /* As the percent operation will receive only one input, setting the operator correctly */
    }  
    switch (prevOperation) {    
      case '+': /* Addition operation */
              result = addition(prevValue, currentValue); 
        result = numFormat(result); /* For repesenting the result with commas */
        outputDisplay.innerHTML = "= " + result;
        prevValue = result;      
        inputDisplay.style.fontSize = "1em";        
        break;
      case "-": /* Subtraction operation */
        // console.log("subtraction");      
        result = subtraction(prevValue, currentValue);
        result = numFormat(result); /* For repesenting the result with commas */  
        outputDisplay.innerHTML = "= " + result;
        prevValue = result;      
        inputDisplay.style.fontSize = "1em";
        // inputDisplay.style.fontSize = (inputDisplay.innerHTML.length >15)?"0.5em":"1em";
        break;
      case "*": /* Multiply operation */
        // console.log("multiplication");      
        result = multiply(prevValue, currentValue);
        result = numFormat(result); /* For repesenting the result with commas */      
        outputDisplay.innerHTML = "= " + result;
        prevValue = result;      
        inputDisplay.style.fontSize = "1em";
        // inputDisplay.style.fontSize = (inputDisplay.innerHTML.length >15)?"0.5em":"1em";
        break;
        case "/": /* Division operation */
          // console.log("division");      
          result = divide(prevValue, currentValue);
          if ( result != "Can't divide by zero") {
          result = numFormat(result);  /* For repesenting the result with commas */  
          }   
          outputDisplay.innerHTML = "= " + result;
          prevValue = result;      
          inputDisplay.style.fontSize = "1em";
          // inputDisplay.style.fontSize = (inputDisplay.innerHTML.length >15)?"0.5em":"1em";
          break;
        case '%': /* Percent operation */
          // console.log("Percentage");
          result = divide(currentValue, "100");
          result = numFormat(result);  /* For repesenting the result with commas */     
          outputDisplay.innerHTML = "= " + result;
          prevValue = result;      
          inputDisplay.style.fontSize = "1em";
          // inputDisplay.style.fontSize = (inputDisplay.innerHTML.length >15)?"0.5em":"1em";
          break;    
      default:
        outputDisplay.innerHTML = "Not a valid sign"
        break;
    }      
  }
  
 // creating equals function 
const equalsClick = () => {
  calculate(); /* To perform the required operation */
  
} 