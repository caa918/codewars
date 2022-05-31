// Solution by Chad ADam
// Kata Link:  https://www.codewars.com/kata/55ccdf1512938ce3ac000056

function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  return (/tree fiddy/g.test(s)) || (/3\.50/g.test(s)) || (/three fifty/g.test(s))
}
