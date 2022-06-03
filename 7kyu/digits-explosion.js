// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/585b1fafe08bae9988000314

function explode(s) {
    let expanded = s.split("")
    let target = []
    expanded.forEach (x => { for (let i = 0 ; i < x ; i++ ) target.push(x) } )
    return (target === undefined) ? "" : target.join("");
  }