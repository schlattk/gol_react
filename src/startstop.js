import initializer from './initializer.js';
const startStop = ( function () {
  let starter;
  let run = function () {
    starter = setInterval(initializer.call, 500);
  };
  let stop = function() {
    clearInterval(starter);
  };
  return{ run: run,
          stop: stop
    };
})();

export default startStop;
