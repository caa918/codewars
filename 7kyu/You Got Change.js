// Solution by Chad Adam
// Kata: https://www.codewars.com/kata/5966f6343c0702d1dc00004c

function giveChange(amount) {
    let change = [0,0,0,0,0,0]
    
  
    while( amount > 0) {
      if( amount >= 100) {
        change[5]++
        amount -= 100
      } else if ( amount >= 50 ) {
        change[4]++
        amount -= 50
      } else if ( amount >= 20 ) {
        change[3]++
        amount -= 20
      } else if ( amount >= 10 ) {
        change[2]++
        amount -= 10
      } else if ( amount >= 5 ) {
        change[1]++
        amount -= 5
      } else if ( amount >= 1 ) {
        change[0]++
        amount -= 1
      }
    }
   return change  
   }