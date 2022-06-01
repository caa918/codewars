// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/5aee86c5783bb432cd000018

function hydrate(s) {
    let drinkString = s.split(' ');
    let waters = 0;
    
    for( let i=0 ; i < drinkString.length ; i++) {
      if(isNaN(Number(drinkString[i]))) {
      } else {
        waters += Number(drinkString[i])
      }
    } 

    return (waters === 1) ? `${waters} glass of water` : `${waters} glasses of water`;
  }