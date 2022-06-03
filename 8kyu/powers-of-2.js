// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powersOfTwo(n){
    let array = [1]
    if (n === 0) {
      return array
    } else {
      for( let i = 1 ; i <= n ; i++) {
        array.push(2**i)
      }
    }
    return array
  }