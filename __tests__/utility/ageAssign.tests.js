import ageAssign from './../../src/utility/ageAssign.js'

describe('ageAssign', () => {
  test('It should accept an array index as an argument and return a float or int representing the age on a planet in years', () => {
    const ageInDays = 1;
    const planetAge = ageAssign(0, ageInDays);
    expect(planetAge).toBeCloseTo(((Math.round(ageInDays*10000/87.97))/10000))
  });
});