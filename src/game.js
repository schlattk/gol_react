import index from './index.js';
import randomizer from './randomizer.js';
import scanner from './scanner.js';
class Game {
  constructor(height, width){
    this.height = height;
    this.width = width;
    this.grid = new Array(height);
    for(let i = 0; i < height; i++){ this.grid[i] = new Array(width) };
    this.make = false;
  };
  seed (number) {
    this.grid.forEach((item) => { for(let j = 0; j < item.length; j++){
                                item[j] = randomizer.random(number); }
                              }
                    );
  };
  move () {
    if (this.make) { this.grid = index.extractor.extract() }
    var length = this.grid.length;
    var counter_grid = new Array(length).fill(new Array(length));
    for(let i = 0; i < length; i ++){ counter_grid[i] = new Array(length) };
    counter_grid.forEach((item, i) => { for(let j = 0; j < length; j++){item[j] = scanner.scan(this.grid,i,j); }});
    this.grid.forEach((item, i) => {for(let j = 0; j < length; j++){
                                    if(this.grid[i][j] === 'X'){counter_grid[i][j] < 2 || counter_grid[i][j] > 3 ? this.grid[i][j] = 'O' : this.grid[i][j] = 'X' }
                                    else if (this.grid[i][j] === 'O') {counter_grid[i][j] === 3 ? this.grid[i][j] = 'X' : this.grid[i][j] = 'O'}
                                    }}
                      );
  };
  print () {
    index.printer.print([].concat.apply([], this.grid));
  };
};

export default Game;
