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
    let randomGrid = helper.flatten(this.grid).map(x => x = randomizer.random(number));
    this.grid = helper.chunk(randomGrid, Math.pow(randomGrid.length, 0.5));
  };
  move () {
    if (this.make) { this.grid = index.extractor.extract() };
    let length = this.grid.length;
    let countAliveGrid = new Array(length).fill('').map(x => x = new Array(length).fill(''));
    countAliveGrid.forEach((item, i) => { for(let j = 0; j < length; j++)
                                    { item[j] = scanner.scan(this.grid, i, j) }});
    this.grid.forEach((item, i) => { for(let j = 0; j < length; j++){
                            if(countAliveGrid[i][j] === 3){ this.grid[i][j] = 'X' }
                            else if( countAliveGrid[i][j] < 2 || countAliveGrid[i][j] > 3)
                            { this.grid[i][j] = 'O' }
                            }
                        });
    };
  print () {
    index.printer.print(helper.flatten(this.grid));
  };
};

export default Game;
