// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/577a98a6ae28071780000989

var min = function(list){
    let minimum = list[0];
    for (let i=0 ; i < list.length ; i++) {
      if (list[i] <= minimum) {
        minimum = list[i]
      }
    }
    return minimum;
}

var max = function(list){
    let maximum = list[0];
    for (let j=0 ; j < list.length ; j++) {
      if (list[j] >= maximum) {
        maximum = list[j]
      }
    }
    return maximum;
}