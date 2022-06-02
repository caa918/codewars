// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/555086d53eac039a2a000083

function lovefunc(flower1, flower2){
    let F1IsEven = (flower1 % 2 === 0) ? true : false;
    let F2IsEven = (flower2 % 2 === 0) ? true : false;
    return (F1IsEven !== F2IsEven); // XNOR of arguments: false if both are the same, otherwise true
}