// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
    let origStr = x.toLowerCase();
    let newStr = "";
    for ( i = x.length - 1; i >= 0 ; i-- ) {
      newStr += origStr[i]
    }
    return (origStr == newStr ) ? true : false;
  }