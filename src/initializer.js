import Game from './game.js';
const initializer = (function () {
  let game;
  let init = function(x, y){
    game = new Game(x, y)
    game.make = false;
    game.seed(0.5);
    game.print();
  };
  let functionCall = function () {
    game.move();
    game.print();
    game.make = false;
  };
  let blank = function (x, y) {
    game = new Game(x, y)
    game.make = true;
    game.seed(1);
    game.print();
  };
    return{ init: init,
            call: functionCall,
            blank: blank };
})();

export default initializer;
