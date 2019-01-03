import index from './index.js';
import helper from './helper.js';
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
    this.grid.forEach(item => {for(let j = 0; j < item.length; j++){
                                item[j] = randomizer.random(number); }
                              }
                    );
  };
  move () {
    if (this.make) { this.grid = index.extractor.extract() }
    let g = this.grid;
    let len = g.length;
    let scan_grid = new Array(len).fill(new Array(len));
    for(let i = 0; i < len; i ++){ scan_grid[i] = new Array(len) };
    scan_grid.forEach((item, i) => { for(let j = 0; j < len; j++){item[j] = scanner.scan(g,i,j) }});
    g.forEach((item, i) => { item.forEach((val, j) => {
                            let field = scan_grid[i][j];
                            if(field === 3){ g[i][j] = 'X' }
                            else if(field < 2 || field > 3){ g[i][j] = 'O'}
                          })
                        });
    };
  print () {
    index.printer.print(helper.flatten(this.grid));
  };
};

export default Game;
