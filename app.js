const numButtons = document.querySelectorAll('.numBut');
const display = document.querySelector('.display1');
const clear = document.querySelector('.clear');
const ops = document.querySelectorAll('.operator');
const add = document.querySelector('.plus');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
let history = document.querySelector('.history');


display.value=0;
let thisbutton = "";

//display numbers
const displayOnScreen = (e) => {
  if (display.value==="0"|| thisbutton==="operatorButton") {
    display.value = e.target.innerHTML;
  } else {
    display.value += e.target.innerHTML;
  }
}

numButtons.forEach((button) => {
   button.addEventListener ('click', displayOnScreen)
})

//clear button

clear.addEventListener('click', displayOnScreen => {
  display.value = "0";
  firstValue=0;
  thisbutton="";
})

//operators

ops.forEach((op) => {
  op.addEventListener('click', e => {
    if (e.target.id==='divide'||
        e.target.id==='multiply'||
        e.target.id==='minus'||
        e.target.id==='plus') {

          firstValue = display.value;
          operatorSign = e.target.id;
          thisbutton = "operatorButton";
    }
    if (thisbutton==="operatorButton") {
      display.value = firstValue;
    } 
  })
})

//equals

const historyData = [];
equals.addEventListener('click', e => {
   const secondValue = display.value;
 
   thisbutton="";

  if (operatorSign==='plus') {
    display.value = Number(firstValue) + Number(secondValue);
    historyData.push(display.value);
    console.log(historyData);
  } 
  if (operatorSign==='minus') {
    display.value = Number(firstValue) - Number(secondValue);
    historyData.push(display.value);
    console.log(historyData);
  } 
  if (operatorSign==='multiply') {
    display.value = Number(firstValue) * Number(secondValue);
    historyData.push(display.value);
    console.log(historyData);
  } 
  if (operatorSign==='divide') {
    display.value = Number(firstValue) / Number(secondValue);
    historyData.push(display.value);
    console.log(historyData);
  } 
})

//decimal
decimal.addEventListener('click', e => {
  if (!display.value.includes('.')){
  display.value += e.target.innerHTML;
  }
  else {
    display.value
  }
})


