// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

function removeEveryOther(arr){
    let modArr = [];
    
    for (let i = 0 ; i < arr.length ; i += 2) {
      modArr.push(arr[i]);
    }
    
    return modArr;
  }