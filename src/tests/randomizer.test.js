import randomizer from '../randomizer';

describe('Randomizer', () => {
  it('should return a X or O based on a seed example => O ', () => {
    let fill = randomizer.random(1);
    expect(fill).toEqual('O');
  });
  it('should return a X or O based on a seed example => X ', () => {
    let fill = randomizer.random(0);
    expect(fill).toEqual('X');
  });
});
