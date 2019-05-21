import Game from '../game.js'
import fieldsToCheck from '../fieldsToCheck.js'

describe('FieldsToCheck', () => {
  it('should return the correct fields example 1 top left corner => 8', () => {
    let game = new Game(5, 5);
    let fields = fieldsToCheck.fields(game.grid, 0, 0);
    expect(fields.length).toEqual(8);
  });
  it('should return the correct fields example 2 middle => 8', () => {
    let game = new Game(5, 5);
    let fields = fieldsToCheck.fields(game.grid, 2, 2);
    expect(fields.length).toEqual(8);
  });
  it('should return the correct fields example 2 bottom right corner => 8', () => {
    let game = new Game(5, 5);
    let fields = fieldsToCheck.fields(game.grid, 4, 4);
    expect(fields.length).toEqual(8);
  });

});
