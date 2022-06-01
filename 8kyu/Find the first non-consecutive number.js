// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
    let nonConsecutivePos = null
    for (let i = 0 ; i < (arr.length - 1) ; i++) {
      if ( arr[i+1] - arr[i] != 1 ) {
        nonConsecutivePos =  arr[i+1]
        break;
      } 
    }
    return nonConsecutivePos
  }