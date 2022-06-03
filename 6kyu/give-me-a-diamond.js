// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n){
    // guard clause for n < 1 or even
    if (n < 1 || n % 2 === 0) {
      return null;
    }
    
    let diam = ""
    let diamonds = []
    let spacing = []
    let starIter = 0
    
    for(let i = 1 ; i <= n ; i += 2) {
      diamonds.push('*'.repeat(i))
      starIter++
    }
    for(let j = starIter ; j > 0 ; j-- ){
      spacing.unshift(' '.repeat(starIter - j))
    }
      
    for (let k = 0 ; k < starIter ; k++){
      diam += spacing[k] + diamonds[k] + '\n'
    }
    
    for (let l = (diamonds.length - 2) ; l >= 0 ; l--) {
        diam += spacing[l] + diamonds[l] + '\n'
    }
    
    return diam;
  }