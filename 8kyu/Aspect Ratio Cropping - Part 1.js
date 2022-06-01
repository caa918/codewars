// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/596e4ef7b61e25981200009f

function aspectRatio(x,y){
    let newRes = []
    newRes[0] = Math.ceil( (y * 16)/9 )
    newRes[1] = y
    
    return newRes
  }