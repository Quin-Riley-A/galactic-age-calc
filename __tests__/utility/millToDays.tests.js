import millToDays from './../../src/utility/millToDays.js'

describe('millToDays', () => {
  test('It should convert an integer representing milliseconds to days', () => {
    const daysResult = millToDays(86400000);
    expect(daysResult).toEqual(1);
  });

  test('It should round a converted number to the nearest hundredth', () => {
    const daysResult = millToDays(86400050);
    const daysResult2 = millToDays(43200000);
    const daysResult3 = millToDays(21600000);
    expect(daysResult).toEqual(1);
    expect(daysResult2).toEqual(0.50);
    expect(daysResult3).toEqual(0.25);
  });
});