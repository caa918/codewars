// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
    let sumOfScores = yourPoints
    classPoints.forEach(x => sumOfScores += x);
    let classAverage = sumOfScores / (classPoints.length + 1)
    return (yourPoints > classAverage) ? true : false
    
  }