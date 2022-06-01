// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

function invert(array) {
    let inverse = [];
    array.forEach(function(element) { 
      inverse.push(element*-1);
    });
     return inverse;
  }
  