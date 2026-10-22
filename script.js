"use strict";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

console.log(display);

let number1;
let number2;
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
  return num1 / num2;
}

function operate(operation, num1, num2) {
  return operation(num1, num2);
}

let result = operate(add, number1, number2);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clicked = Number(e.target.textContent);
    if (clicked || clicked === 0) {
      number1 = clicked;
      display.textContent = clicked;
    }
  });
});
