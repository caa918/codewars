// Solution by Chad Adam
// Kata: https://www.codewars.com/kata/57e1e61ba396b3727c000251

function stringClean(s){
    const re = /[^0-9]/g
    let corrected = s.match(re)
    
    if(corrected === null) {
      return ""
    }
    else return corrected.join("")
  }