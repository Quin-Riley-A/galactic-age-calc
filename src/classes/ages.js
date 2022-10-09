import millToDays from './../utility/millToDays.js';
import ageAssign from '../utility/ageAssign.js';

export default class Ages {
  constructor(userBirthday, currentDate) {
    this.birthday = userBirthday.toDateString();
    let ageMillisec = currentDate - userBirthday;
    this.ageInDays = millToDays(ageMillisec);
    this.mercuryAge = ageAssign(0, this.ageInDays);
    this.venusAge = ageAssign(1, this.ageInDays);
    this.earthAge = ageAssign(2, this.ageInDays);
    this.marsAge = ageAssign(3, this.ageInDays);
    this.ceresAge = ageAssign(4, this.ageInDays);
    this.jupiterAge = ageAssign(5, this.ageInDays);
    this.saturnAge = ageAssign(6, this.ageInDays);
    this.uranusAge = ageAssign(7, this.ageInDays);
    this.neptuneAge = ageAssign(8, this.ageInDays);
    this.plutoAge = ageAssign(9, this.ageInDays);
    this.erisAge = ageAssign(10, this.ageInDays);
  }
}