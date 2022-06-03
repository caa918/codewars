// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    for (let i = 0 ; i < geese.length ; i++) {
        for (let j = birds.length - 1 ; j >= 0; j--) {
            if(geese[i] === birds[j]) {
              birds.splice(j,1)
            }
        }
    }
    return birds;
}