import Ages from './classes/ages.js';
import 'bootstrap';
import './../css/bootstrap.css';
import './../css/styles.css';

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
  displayPlanetAges();
  console.log("current Age: " + age1);
}

function displayPlanetAges() {
  let outputDiv = document.getElementById('outputDiv');
  if (outputDiv !== null) {
    while (outputDiv.firstChild) {
      outputDiv.removeChild(outputDiv.firstChild);
    }
  }
}