import Ages from './../src/classes/ages.js'

describe('Ages', () => {
  test('It should construct an object of the Ages-class producing age-properties from a passed in date-object.', () => {
    let userBirthday = new Date(95, 0, 1);
    let currentDate = new Date;
    let userGalacticAge = new Ages(userBirthday, currentDate);
    let currentAge = (currentDate-userBirthday) / (1000 * 60 * 60 * 24 *365.25);
    expect(userGalacticAge.earthAge).toEqual(currentAge);
    expect(userGalacticAge.mercuryAge).toEqual(currentAge * 88/365.25);
    expect(userGalacticAge.venusAge).toEqual(currentAge * 224.7/365.25);
    expect(userGalacticAge.marsAge).toEqual(currentAge * 687/365.25);
    expect(userGalacticAge.ceresAge).toEqual(currentAge * 1680/365.25);
    expect(userGalacticAge.jupiterAge).toEqual(currentAge * 4332.6/365.25);
    expect(userGalacticAge.saturnAge).toEqual(currentAge * 24491/365.25);
    expect(userGalacticAge.uranusAge).toEqual(currentAge * 30688.5/365.25);
    expect(userGalacticAge.neptuneAge).toEqual(currentAge * 60195/365.25);
    expect(userGalacticAge.plutoAge).toEqual(currentAge * 90560/365.25);
    expect(userGalacticAge.erisAge).toEqual(currentAge * 204199/365.25);
  });
});