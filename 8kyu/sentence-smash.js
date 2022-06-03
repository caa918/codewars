// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/53dc23c68a0c93699800041d

function smash (words) {
    let sentence = ""; //initialize empty string
    
    // test if empty array
    if (words.length === 0) {
      return "";
    } 
    
    // test if single element array
    if(words.length === 1) {
      return sentence = words[0];
    }
    
    // test if 2 or more elements
    if(words.length > 1) {
      // construct string using all but the last element in the array with appended space characters
      for (let i = 0 ; i <= (words.length - 2) ; i++) {
            sentence += words[i];
            sentence += " ";  
      }
      return sentence += words[words.length - 1]; //return with last elemented added but with no appended space
    }
  }