// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/59dc8288fc3c49cc3f000039

function sort(initialArray, sortingArray) {

    // Guard clause: return [] on either undefined or empty array
    if (initialArray === undefined || initialArray.length === 0) {
      return []
    }
    
    let sortedArray = []
    for( let i = 0 ; i < sortingArray.length ; i++ ) {
      sortedArray.push(initialArray[sortingArray.indexOf(i)])
    }
      return sortedArray
    }