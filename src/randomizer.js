const randomizer = (function(){
  let random = function(number){
      return Math.random() > number ? "X" : "O";
  };
  return{random: random};
})();

export default randomizer;
