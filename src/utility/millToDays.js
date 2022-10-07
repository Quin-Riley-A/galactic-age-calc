export default function millToDays(inputMilliSec) {
  const resultDays = (inputMilliSec / (1000 * 60 * 60 * 24));
  return resultDays;
}