// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/59cd0535328801336e000649

function interest(P,r,t) {
    let simpleInterest = Math.round( P + (P*r*t))
    let compoundInterest = 0
    let compoundOwed = P
    for (let i = 0 ; i < t ; i++) {
      compoundInterest = compoundOwed*r
      compoundOwed += compoundInterest
    }
    return [ simpleInterest, Math.round( compoundOwed )]
  }