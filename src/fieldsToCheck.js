import helper from './helper.js';

const fieldsToCheck = (function () {
  let checkFields = function (grid, x, y) {
    let find = helper.find;
    let len = grid.length - 1;
    let fields = [grid[x][find(y-1, len)], grid[x][find(y+1, len)]];
    if(grid[x-1]) { fields.push(grid[x-1][y], grid[x-1][find(y-1, len)], grid[x-1][find(y+1, len)]) }
    else { fields.push(grid[x+len][y], grid[x+len][find(y-1, len)], grid[x+len][find(y+1, len)]) };
    if(grid[x+1]) {fields.push(grid[x+1][y], grid[x+1][find(y+1, len)], grid[x+1][find(y-1, len)]) }
    else { fields.push(grid[x-len][y], grid[x-len][find(y+1, len)], grid[x-len][find(y-1, len)]) };
    return fields
  };
  return { fields :checkFields }
})();

export default fieldsToCheck;
