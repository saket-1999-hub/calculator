"use strict";

const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num-btn");
const operationBtns = document.querySelectorAll(".operation");
const equalBtn = document.querySelector(".eual-btn");

let operationClicked = false;
let displayContent = "";
let number1 = "";
let number2 = "";
let operation;

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
  let first = Number(num1);
  let second = Number(num2);
  return operation(first, second);
}

// first number selection

function firstNumber(num) {
  return (number1 += num);
}

// second number selectionn

function secondNumber(num) {
  return (number2 += num);
}

// operation choices

function operationChoices(choice) {
  switch (choice) {
    case "+":
      return add;

    case "-":
      return subtract;

    case "×":
      return multiply;

    case "÷":
      return divide;

    default:
      console.log("Invalid");
  }
}

function updateDisplay(value) {
  display.textContent = value;
}

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (operationClicked) {
      const secondOperand = secondNumber(btn.textContent);
      updateDisplay(secondOperand);
    } else {
      const firstOperand = firstNumber(btn.textContent);
      updateDisplay(firstOperand);
    }
  });
});

operationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    operationClicked = true;
    operation = operationChoices(btn.textContent);
  });
});

equalBtn.addEventListener("click", () => {
  let result = operate(operation, number1, number2);
  updateDisplay(result);
});
