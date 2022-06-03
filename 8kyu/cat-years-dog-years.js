// Solution by Chad Adam
// Kata: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

let humanYearsCatYearsDogYears = function(humanYears) {
    let answer = [humanYears, 0, 0]
    let counter = humanYears
    
    while (counter > 0) {
      if (counter === 1) {
        answer[1] += 15 // +15 catYears in year 1
        answer[2] += 15 // +15 dogYears in year 1
      }  
      
      if (counter === 2) {
        answer[1] += 9 // +9 catYears in year 2
        answer[2] += 9 // +9 dogYears in year 2
      }
      
      if (counter > 2) {
        answer[1] += 4 // +4 catYears in years > 2
        answer[2] += 5 // +5 dogYears in years > 2
      }
      
      counter--
    }
    
    return answer;
  }