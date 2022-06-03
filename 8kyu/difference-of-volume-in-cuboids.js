// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/58cb43f4256836ed95000f97

function findDifference(a, b) {
    let volA = 1;
    let volB = 1;
    for(let i = 0 ; i < 3 ; i++) {
      volA *= a[i];
      volB *= b[i];
    }
    return Math.abs(volA - volB);
  }