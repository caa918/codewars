// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

function countSheep(num){
    let result = "";
    if (num === 0) {
      return result;
    }
    for (let i = 1 ; i <= num ; i++ ) {
      result += `${i} sheep...`
    }
    return result;
  }