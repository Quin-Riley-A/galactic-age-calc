import millToDays from './../utility/millToDays.js'

const mercuryYear = 87.97;
const venusYear = 224.7;
const earthYear = 365.25;
const marsYear = 687.98;
const ceresYear = 1680;
const jupiterYear = 4332.59;
const saturnYear = 10759.22;
const uranusYear = 30688.5;
const neptuneYear = 60195;
const plutoYear = 90560;
const erisYear = 204199;

export default class Ages {
  constructor(userBirthday, currentDate) {
    this.birthday = userBirthday.toDateString();
    let ageMillisec = currentDate - userBirthday;
    this.ageInDays = millToDays(ageMillisec);
    this.earthAge = (Math.round(this.ageInDays*100/earthYear))/100
    this.mercuryAge = (Math.round(this.ageInDays*100/mercuryYear))/100;
    this.venusAge = (Math.round(this.ageInDays*100/venusYear))/100;
    this.marsAge = (Math.round(this.ageInDays*100/marsYear))/100;
    this.ceresAge = (Math.round(this.ageInDays*100/ceresYear))/100;
    this.jupiterAge = (Math.round(this.ageInDays*100/jupiterYear))/100;
    this.saturnAge = (Math.round(this.ageInDays*100/saturnYear))/100;
    this.uranusAge = (Math.round(this.ageInDays*100/uranusYear))/100;
    this.neptuneAge = (Math.round(this.ageInDays*100/neptuneYear))/100;
    this.plutoAge = (Math.round(this.ageInDays*100/plutoYear))/100;
    this.erisAge = (Math.round(this.ageInDays*100/erisYear))/100;
  }
}