import millToDays from './../utility/millToDays.js';

//const mercuryYear = 87.97;
//const venusYear = 224.7;
const earthYear = 365.25;
const marsYear = 687.98;
const ceresYear = 1680;
const jupiterYear = 4332.59;
const saturnYear = 10759.22;
const uranusYear = 30688.5;
const neptuneYear = 60195;
const plutoYear = 90560;
const erisYear = 204199;

const planetYearLen = [87.97 + 'merYear', 224.7 + 'venYear', 365.25 + 'earYear', 687.98 + 'marYear', 1680 + 'cerYear', 4332.59 + 'jupYear', 10759.22 + 'satYear', 30688.5 + 'uraYear', 60195 + 'nepYear', 90560 + 'pluYear', 204199 + 'eriYear'];

export default class Ages {
  constructor(userBirthday, currentDate) {
    this.birthday = userBirthday.toDateString();
    let ageMillisec = currentDate - userBirthday;
    this.ageInDays = millToDays(ageMillisec);
    this.mercuryAge = (Math.round(this.ageInDays*10000/parseFloat(planetYearLen[0])))/10000;
    this.venusAge = (Math.round(this.ageInDays*10000/parseFloat(planetYearLen[1])))/10000;
    this.earthAge = (Math.round(this.ageInDays*10000/earthYear))/10000;
    this.marsAge = (Math.round(this.ageInDays*10000/marsYear))/10000;
    this.ceresAge = (Math.round(this.ageInDays*10000/ceresYear))/10000;
    this.jupiterAge = (Math.round(this.ageInDays*10000/jupiterYear))/10000;
    this.saturnAge = (Math.round(this.ageInDays*10000/saturnYear))/10000;
    this.uranusAge = (Math.round(this.ageInDays*10000/uranusYear))/10000;
    this.neptuneAge = (Math.round(this.ageInDays*10000/neptuneYear))/10000;
    this.plutoAge = (Math.round(this.ageInDays*10000/plutoYear))/10000;
    this.erisAge = (Math.round(this.ageInDays*10000/erisYear))/10000;
  }
}