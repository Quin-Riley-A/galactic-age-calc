import Ages from './classes/ages.js';
import 'bootstrap';
import './../css/bootstrap.css';
import './../css/styles.css';

let date1 = new Date(2022, 9, 10);
let date2 = new Date(2022, 9, 9);
let age = new Ages(date2, date1);
console.log(age);
console.log(age.merAge)