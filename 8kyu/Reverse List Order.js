// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b

function reverseList(list) {
    let rList = []
    list.forEach(x => rList.unshift(x))
    return rList
}