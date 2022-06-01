// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/5a360620f28b82a711000047

function defineSuit(card) {
    switch(card[card.length -1]) {
        case '♣': return 'clubs'; break;
        case '♦': return 'diamonds'; break;
        case '♥': return 'hearts' ; break;
        case '♠': return 'spades'; break;
    }
  }
  