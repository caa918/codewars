// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/5d378318e04cd7001ad72a27

function doubleOrNothing(cash, wager, losses){
    let currentWager = wager
    for (let i = 1 ; i < losses ; i++) {
      currentWager *= 2
    }
    return (currentWager > cash) ? `I'll pay you back later` : cash - currentWager
  }

  