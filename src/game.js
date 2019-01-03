import index from './index.js';
import helper from './helper.js';
import randomizer from './randomizer.js';
import scanner from './scanner.js';
class Game {
  constructor (height, width){
    this.height = height;
    this.width = width;
    this.grid = new Array(height).fill('').map(x => x = new Array(width).fill(''));
    this.make = false;
  };
  seed (number) {
    let randGrid = helper.flatten(this.grid).map(x => x = randomizer.random(number));
    this.grid = helper.chunk(randGrid, Math.pow(randGrid.length, 0.5));
  };
  move () {
    if (this.make) { this.grid = index.extractor.extract() }
    let g = this.grid;
    let len = g.length;
    let scanG = new Array(len).fill('').map(x => x = new Array(len).fill(''));
    scanG.forEach((item, i) => { for(let j = 0; j < len; j++){ item[j] = scanner.scan(g, i, j) }});
    g.forEach((item, i) => { for(let j = 0; j < len; j++){
                            let field = scanG[i][j];
                            if(field === 3){ g[i][j] = 'X' }
                            else if(field < 2 || field > 3){ g[i][j] = 'O' }
                          }
                        });
    };
  print () {
    index.printer.print(helper.flatten(this.grid));
  };
};

export default Game;
