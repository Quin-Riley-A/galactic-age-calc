import Ages from './../src/classes/ages.js';

describe('Ages', () => {
  test('It should construct an object of the Ages-class producing age-properties from a passed in date-object.', () => {
    let userBirthday = new Date(95, 0, 1);
    let currentDate = new Date;
    let userGalacticAge = new Ages(userBirthday, currentDate);
    let currentAge = (currentDate-userBirthday) / (1000 * 60 * 60 * 24 *365.25);
    expect(userGalacticAge.earthAge).toBeCloseTo (currentAge);
    expect(userGalacticAge.mercuryAge).toBeCloseTo(currentAge * 365.25/87.97);
    expect(userGalacticAge.venusAge).toBeCloseTo(currentAge * 365.25/224.7);
    expect(userGalacticAge.marsAge).toBeCloseTo(currentAge * 365.25/687.98);
    expect(userGalacticAge.ceresAge).toBeCloseTo(currentAge * 365.25/1680);
    expect(userGalacticAge.jupiterAge).toBeCloseTo(currentAge * 365.25/4332.59);
    expect(userGalacticAge.saturnAge).toBeCloseTo(currentAge * 365.25/10759.22);
    expect(userGalacticAge.uranusAge).toBeCloseTo(currentAge * 365.25/30688.5);
    expect(userGalacticAge.neptuneAge).toBeCloseTo(currentAge * 365.25/60195);
    expect(userGalacticAge.plutoAge).toBeCloseTo(currentAge * 365.25/90560);
    expect(userGalacticAge.erisAge).toBeCloseTo(currentAge * 365.25/204199);
  });
});