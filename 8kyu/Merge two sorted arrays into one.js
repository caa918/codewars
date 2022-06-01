// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/5899642f6e1b25935d000161

function mergeArrays(arr1, arr2) {
    let combinedArr = [].concat(arr1, arr2);
    combinedArr.sort((a,b) => {return a-b});
    let filteredArr = [];
    combinedArr.forEach((item) => { if (!filteredArr.includes(item)) { filteredArr.push(item); }});
    return (filteredArr === combinedArr) ? combinedArr : filteredArr
}