// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/559ac78160f0be07c200005a

function nameShuffler(str){
    let stringPieces = str.split(" ")
    return `${stringPieces[1]} ${stringPieces[0]}`
  }