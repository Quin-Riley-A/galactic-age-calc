export default function ageAssign(index, ageInDays) {
  const planetYearLen = [87.97 + 'merYear', 224.7 + 'venYear', 365.25 + 'earYear', 687.98 + 'marYear', 1680 + 'cerYear', 4332.59 + 'jupYear', 10759.22 + 'satYear', 30688.5 + 'uraYear', 60195 + 'nepYear', 90560 + 'pluYear', 204199 + 'eriYear'];
  return (Math.round(ageInDays*10000/parseFloat(planetYearLen[index])))/10000;
}