import helper from './helper.js';

const fieldsToCheck = (function () {
  let checkFields = function (grid, x, y) {
    let rep = helper.rep;
    let len = grid.length - 1;
    let fields = [grid[x][rep(y-1, len)], grid[x][rep(y+1, len)]];
    if(grid[x-1]) { fields.push(grid[x-1][y], grid[x-1][rep(y-1, len)], grid[x-1][rep(y+1, len)]) }
    else { fields.push(grid[x+len][y], grid[x+len][rep(y-1, len)], grid[x+len][rep(y+1, len)]) };
    if(grid[x+1]) {fields.push(grid[x+1][y], grid[x+1][rep(y+1, len)], grid[x+1][rep(y-1, len)]) }
    else { fields.push(grid[x-len][y], grid[x-len][rep(y+1, len)], grid[x-len][rep(y-1, len)]) };
    return fields
  };
  return { fields :checkFields }
})();

export default fieldsToCheck;
