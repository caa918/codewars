// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/586e1d458cb711f0a800033b

function processData(data){
    let deltaJ = []
    let productI = 1
    for (let i = 0 ; i < data.length; i++) {
      deltaJ.push(data[i][0] - data[i][1])
    }
    for (let i = 0 ; i < deltaJ.length; i++) {
      productI *= deltaJ[i]
    }
    return productI
  }