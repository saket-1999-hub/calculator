"use strict";

const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num-btn");
const operatorBtn = document.querySelectorAll(".operation");
const equalBtn = document.querySelector(".eual-btn");
const allClearBtn = document.querySelector(".clear-btn");

// let operationClicked = false;
// let result;
let number1 = "";
let number2 = "";
let operator = "";

// Basic maths funtions

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 === 0 ? "Infinity" : num1 / num2;
}

function operate(operation, num1, num2) {
  switch (operation) {
    case "+":
      return add(num1, num2);

    case "-":
      return subtract(num1, num2);

    case "×":
      return multiply(num1, num2);

    case "÷":
      return divide(num1, num2);

    default:
      return "Invalid";
  }
}

// first number selection

// function firstNumber(num) {
//   return (number1 += num);
// }

// second number selectionn

// function secondNumber(num) {
//   return (number2 += num);
// }

// operation choices

// function operationChoices(choice) {
//   switch (choice) {
//     case "+":
//       return add;

//     case "-":
//       return subtract;

//     case "×":
//       return multiply;

//     case "÷":
//       return divide;

//     default:
//       console.log("Invalid");
//   }
// }

// calculation function

// function calculation(operation, number1, number2) {
//   return operate(operation, number1, number2);
// }

function updateDisplay() {
  display.textContent = number1 + operator + number2;
}

// numBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (operationClicked) {
//       const secondOperand = secondNumber(btn.textContent);
//       updateDisplay(secondOperand);
//     } else {
//       const firstOperand = firstNumber(btn.textContent);
//       updateDisplay(firstOperand);
//     }
//   });
// });

// operationBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     operation = operationChoices(btn.textContent);
//     operationClicked = true;
//   });
// });

// equalBtn.addEventListener("click", () => {
//   // result = operate(operation, number1, number2);
//   result = calculation(operation, number1, number2);
//   updateDisplay(result);
// });

function calculation() {
  const result = operate(operator, Number(number1), Number(number2));
  display.textContent = result;
}

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!operator) {
      number1 += btn.textContent;
    } else {
      number2 += btn.textContent;
    }
    updateDisplay();
  });
});

operatorBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = btn.textContent;
    updateDisplay();
  });
});

equalBtn.addEventListener("click", () => {
  calculation();
});
