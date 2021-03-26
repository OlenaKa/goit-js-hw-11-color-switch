
import colors from '../data/colors.js';

const btnStartRef = document.querySelector('[data-action="start"]')
const btnStopRef = document.querySelector('[data-action="stop"]')
const bodyRef = document.querySelector('body')
let timerId=0;

btnStartRef.addEventListener('click', switcher)
btnStopRef.addEventListener('click', stopSwitch )

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function colorSet () {
  bodyRef.style.backgroundColor=`${colors[randomIntegerFromInterval(0, colors.length-1)]}`
}

function switcher () {
  timerId = setInterval(colorSet, 1000);
  btnStartRef.disabled = true
}

function stopSwitch () {
  clearInterval(timerId);
  btnStartRef.disabled = false;
}


