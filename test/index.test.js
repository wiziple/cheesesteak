import cheesesteak from '../src';

describe('cheesesteak', () => {
  it('should return the next cheesesteak day', () => {
    expect(cheesesteak()).not.toBe(undefined);
  });

  it('should return 2018-07-20 12:00:00', () => {
    expect(cheesesteak('2018-07-20 12:00:00').format('YYYY-MM-DD h:mm:ss')).toBe('2018-07-20 12:00:00');
  });

  it('should return 2018-08-03 12:00:00', () => {
    expect(cheesesteak('2018-07-27 12:00:01').format('YYYY-MM-DD h:mm:ss')).toBe('2018-08-03 12:00:00');
  });
});
