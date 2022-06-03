// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

function solution(nums){
  
    // Guard clause
    if( nums == null || nums == []){
      return [];
    }
    
    return nums.sort(function(a,b){ return a-b})
    
}