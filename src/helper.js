  let rep = function (y, length) {
    let result;
    if (y < 0){ result = length }
    else if (y > length){ result = 0 }
    else { result = y }
  return result
  };
  let chunkArray = function (array, size) {
    let finalArray = [];
    while(array.length) {
      finalArray.push(array.splice(0, size))
    };
    return finalArray;
  };
  let flatArray = function (array) {
    let flatArr = array.reduce((arr, val) => arr.concat(val), [])
    return flatArr;
  };

  export default {rep: rep,
                  chunk: chunkArray,
                  flatten: flatArray
                  };
