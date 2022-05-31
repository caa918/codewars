// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/56efc695740d30f963000557

String.prototype.toAlternatingCase = function () {
  let strMod = this.toString().split('')
  for (let i = 0 ; i < strMod.length ; i++) {
    if( /[A-Z]/.test(strMod[i]) ) {
      strMod[i] = strMod[i].toLowerCase()
    } else if( /[a-z]/.test(strMod[i]) ) {
      strMod[i] = strMod[i].toUpperCase()
    }
  }
  return strMod.join('')
}
