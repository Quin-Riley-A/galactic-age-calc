import millToDays from './../utility/millToDays.js'

export default class Ages {
  constructor(userBirthday, currentDate) {
    this.birthday = userBirthday.toDateString();
    let ageMillisec = currentDate - userBirthday;
    this.ageInDays = millToDays(ageMillisec);
    this.earthAge = (Math.round(this.ageInDays*100/365.25))/100
  }
}