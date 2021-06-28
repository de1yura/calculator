"use strict";

var numButtons = document.querySelectorAll('.numBut');
var display = document.querySelector('.display1');
var clear = document.querySelector('.clear');
var ops = document.querySelectorAll('.operator');
var add = document.querySelector('.plus');
var equals = document.querySelector('.equals');
var decimal = document.querySelector('.decimal');
var history = document.querySelector('.history');
display.value = 0;
var thisbutton = ""; //display numbers

var displayOnScreen = function displayOnScreen(e) {
  if (display.value === "0" || thisbutton === "operatorButton") {
    display.value = e.target.innerHTML;
  } else {
    display.value += e.target.innerHTML;
  }
};

numButtons.forEach(function (button) {
  button.addEventListener('click', displayOnScreen);
}); //clear button

clear.addEventListener('click', function (displayOnScreen) {
  display.value = "0";
  firstValue = 0;
  thisbutton = "";
}); //operators

ops.forEach(function (op) {
  op.addEventListener('click', function (e) {
    if (e.target.id === 'divide' || e.target.id === 'multiply' || e.target.id === 'minus' || e.target.id === 'plus') {
      firstValue = display.value;
      operatorSign = e.target.id;
      thisbutton = "operatorButton";
    }

    if (thisbutton === "operatorButton") {
      display.value = firstValue;
    }
  });
}); //equals

var historyData = [];
equals.addEventListener('click', function (e) {
  var secondValue = display.value;
  thisbutton = "";

  if (operatorSign === 'plus') {
    display.value = Number(firstValue) + Number(secondValue);
    historyData.push(display.value);
    console.log(historyData);
  }

  if (operatorSign === 'minus') {
    display.value = Number(firstValue) - Number(secondValue);
    historyData.push(display.value);
    console.log(historyData);
  }

  if (operatorSign === 'multiply') {
    display.value = Number(firstValue) * Number(secondValue);
    historyData.push(display.value);
    console.log(historyData);
  }

  if (operatorSign === 'divide') {
    display.value = Number(firstValue) / Number(secondValue);
    historyData.push(display.value);
    console.log(historyData);
  }
}); //decimal

decimal.addEventListener('click', function (e) {
  if (!display.value.includes('.')) {
    display.value += e.target.innerHTML;
  } else {
    display.value;
  }
});