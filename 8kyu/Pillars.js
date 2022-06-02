// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/5bb0c58f484fcd170700063d

function pillars(num_pill, dist, width) {
    let distPillIncludeCm = (num_pill > 2) ? ((num_pill - 2) * width) : 0 // we are only including pillar width in cases of 3 or more pillars
    let distBetweenCm = (dist * 100) * (num_pill - 1) // accounts for single pillar case where there would be no distance
    return distPillIncludeCm + distBetweenCm
  }