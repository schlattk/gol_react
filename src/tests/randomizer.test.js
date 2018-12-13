import Game from '../game.js';
import randomizer from '../randomizer';

describe('Randomizer', () => {
  it('should return a X or O based on a seed example => O ', () => {
    let game = new Game(5, 5);
    let fill = randomizer.random(1);
    expect(fill).toEqual('O');
  });
  it('should return a X or O based on a seed example => X ', () => {
    let game = new Game(5, 5);
    let fill = randomizer.random(0);
    expect(fill).toEqual('X');
  });
});
