// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
    let dblStr = [];
    for (let i = 0 ; i < str.length ; i++) {
      dblStr += str[i];
      dblStr += str[i];
    }
    return dblStr;
  }