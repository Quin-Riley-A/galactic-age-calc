export default function millToDays(inputMilliSec) {
  let resultDays = (inputMilliSec / (1000 * 60 * 60 * 24));
  resultDays = (Math.round(resultDays*100)/100);
  return resultDays;
}