// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/5a1ebe0d46d843454100004c

// parameter is date in array in [DD, MM, YYYY] format
function toDayOfYear(arr) {
    // Is it a leap year?
    let isLeapYear = false
    
    // accumulator for dayOfYear starts at 0
    let dayOfYear = 0;
    
    // by default, set up array for 365 day year
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // check if leap year, if so, change February to 29 days
    if( ((arr[2] % 4 === 0) && (arr[2] % 100 != 0)) || (arr[2] % 400 === 0) ) {
      isLeapYear = true;
      daysInMonth[1] = 29;
    }
    
    // check if date is in January and just return the number of days
    if( arr[1] == 1) {
      dayOfYear += arr[0]
    } else {
      // accumulate number of days in all months prior to current month  
      for (let i = 0 ; i < (arr[1]-1) ; i++ ) {
      dayOfYear += daysInMonth[i];
      }
      dayOfYear += arr[0] //add the days of current month
    }
    
    return dayOfYear  // return a number
  }