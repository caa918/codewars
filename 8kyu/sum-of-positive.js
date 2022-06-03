// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    let sum = 0
    if (arr === []) {return sum}
    arr.forEach( x => { (x < 0) ? sum += 0 : sum += x})
    return sum
  }