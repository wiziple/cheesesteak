import cheesesteak from '../src';

describe('cheesesteak', () => {
  it('should return null when navigator.languages is undefined.', () => {
    expect(cheesesteak()).toBe(undefined);
  });
});
