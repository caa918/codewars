// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/5ab6538b379d20ad880000ab

const areaOrPerimeter = function(l , w) {
  return (l === w) ? (l * w) : ( l + l + w + w )
};
