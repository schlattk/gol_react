import scanner from '../scanner.js';
import Game from '../game.js';

describe('Scanner', () => {
  it('counts the number of X neighbours for a given cell in the grid', () => {
    let game = new Game(10, 5);
    game.seed(1);
    expect(scanner.scan).toBeDefined();
    expect(scanner.scan(game.grid, 2, 2)).toEqual(0);
    game.seed(0);
    expect(scanner.scan).toBeDefined();
    expect(scanner.scan(game.grid, 3, 3)).toEqual(8);
  });
  it('counts the number of X neighbours correctly for corner cells', () => {
    let game = new Game(5, 5);
    game.seed(0);
    expect(scanner.scan(game.grid, 0, 4)).toEqual(8);
    expect(scanner.scan(game.grid, 4, 0)).toEqual(8);
  });
  it('counts the number of X neighbours correctly for edge cells', () => {
    let game = new Game(5, 5);
    game.seed(0);
    expect(scanner.scan(game.grid, 0, 1)).toEqual(8);
    expect(scanner.scan(game.grid, 4, 2)).toEqual(8);
  });
});
