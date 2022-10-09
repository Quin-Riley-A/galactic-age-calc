import Ages from './classes/ages.js';
import 'bootstrap';
import './../css/bootstrap.css';
import './../css/styles.css';

let date1 = new Date(2022, 9, 10);
let date2 = new Date(2022, 9, 9);
let age = new Ages(date2, date1);
console.log(age);
console.log(age.mercuryAge);

window.addEventListener('load', winLoad);

function winLoad() {
  const form = document.querySelector('form');
  form.addEventListener('submit', userSubmit);
}

function userSubmit(event) {
  event.preventDefault();
  let currentDate = new Date();
  let userDateArr = document.getElementById('userDate').value.split('-');
  const userDate = new Date(userDateArr[0], userDateArr[1]-1, userDateArr[2]);
  const age1 = new Ages(userDate, currentDate);
  console.log(age1);
  console.log(currentDate);
}