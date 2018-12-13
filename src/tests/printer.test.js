import Game from '../game.js';
import index from '../index.js'

  it('has a print function', () => {
    spyOn(index.printer, 'print');
    expect(index.printer.print).toBeDefined();
  });
  it('should have been called', () => {
    spyOn(index.printer, 'print');
    let game = new Game(5, 5);
    game.seed(0);
    game.print();
    expect(index.printer.print).toHaveBeenCalled();
  });
