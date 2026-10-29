"use strict";

const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num-btn");
const operatorBtn = document.querySelectorAll(".operation");
const equalBtn = document.querySelector(".eual-btn");
const allClearBtn = document.querySelector(".clear-btn");
const deleteBtn = document.querySelector(".delete-btn");
const dotBtn = document.querySelector(".dot-btn");

let number1 = "";
let number2 = "";
let operator = "";
let hasResult = false;

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

function clear() {
  number1 = "";
  number2 = "";
  operator = "";
  hasResult = false;
}

function updateDisplay() {
  display.textContent = number1 + operator + number2;
}

function calculation() {
  const result = operate(operator, Number(number1), Number(number2));
  if (typeof result !== "number") {
    clear();
    hasResult = true;
    display.textContent = result;
    return false;
  }

  number1 = String(Math.round(result * 100) / 100);
  number2 = "";
  return true;
}

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (hasResult) {
      clear();
    }
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
    if (!number1) {
      return;
    }
    if (operator && number2) {
      if (!calculation()) {
        return;
      }
    }
    operator = btn.textContent;
    hasResult = false;
    updateDisplay();
  });
});

equalBtn.addEventListener("click", () => {
  if (!operator || !number1 || !number2) {
    return;
  }
  if (!calculation()) {
    return;
  }
  operator = "";
  hasResult = true;
  updateDisplay();
});

allClearBtn.addEventListener("click", () => {
  clear();
  updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  if (hasResult) {
    return;
  }
  if (number2) {
    number2 = number2.slice(0, -1);
  } else if (operator) {
    operator = "";
  } else {
    number1 = number1.slice(0, -1);
  }
  updateDisplay();
});

dotBtn.addEventListener("click", () => {
  if (hasResult) {
    clear();
  }
  if (!operator) {
    if (number1.includes(".")) {
      return;
    }
    number1 = (number1 || "0") + ".";
  } else {
    if (number2.includes(".")) {
      return;
    }
    number2 = (number2 || "0") + ".";
  }
  updateDisplay();
});
