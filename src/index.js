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
  const userDateArr = document.getElementById('userDate').value.split('-');
  const userDate = new Date(userDateArr[0], userDateArr[1]-1, userDateArr[2]);
  const userExpiryDate = parseFloat(document.getElementById('userLifeExpect').value);
  const age1 = new Ages(userDate, currentDate);
  age1.lifeExpectCalc(userExpiryDate*365.242189*24*60*60*1000);
  console.log(age1.estimatedExpiryDate);
  displayPlanetAges(age1);
}

function displayPlanetAges(age1) {
  let outputDiv = document.getElementById("outputDiv");
  if (outputDiv === null) {
    outputDiv = document.createElement('div');
    outputDiv.setAttribute("id", "outputDiv");
  }
  if (outputDiv !== null) {
    while (outputDiv.firstChild) {
      outputDiv.removeChild(outputDiv.firstChild);
    }
  }
  const h3 = document.createElement('h3');
  h3.innerText = "Interplanetary Expiration Date:";
  outputDiv.append(h3);
  const birthdayPTag = document.createElement('p');
  birthdayPTag.innerText = "Your chosen birthdate is " + age1.birthday;
  outputDiv.append(birthdayPTag);
  const demisePTag = document.createElement('p');
  demisePTag.innerText = "Based on your life  expectancy, your estimated 'expiration date' is " + age1.estimatedExpiryDate + ".";
  const currentDay = (Date.parse((new Date()).toDateString()));
  if (Date.parse(age1.estimatedExpiryDate) > currentDay) {
    demisePTag.append(" You've still got some time left, so do enjoy it as best you can!");
  } else if (Date.parse(age1.estimatedExpiryDate) === currentDay) {
    demisePTag.append(" While this may seem like a dark prophecy, on this auspicious day, you're still trucking along.");
  } else if (Date.parse(age1.estimatedExpiryDate) < currentDay) {
    demisePTag.append("  At this point, you're exceeding expectations, you've lived " );
  }
  outputDiv.append(demisePTag);
  document.querySelector('body').append(outputDiv);
}