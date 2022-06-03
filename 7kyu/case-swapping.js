// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/5590961e6620c0825000008f

function swap(str){
    let strMod = str.split('')
    for (let i = 0 ; i < strMod.length ; i++) {
      if( /[A-Z]/.test(strMod[i]) ) {
        strMod[i] = strMod[i].toLowerCase()
      } else if( /[a-z]/.test(strMod[i]) ) {
        strMod[i] = strMod[i].toUpperCase()
      }
    }
    return strMod.join('')
  }