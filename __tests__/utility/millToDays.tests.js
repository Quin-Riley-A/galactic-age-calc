import millToDays from './../../src/utility/millToDays.js'

describe('millToDays', () => {
  test('It should convert an integer representing milliseconds to days', () => {
    const daysResult = millToDays(86400000);
    expect(daysResult).toEqual(1);
  });
});