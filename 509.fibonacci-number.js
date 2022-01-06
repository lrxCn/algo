/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
   if(n === 0 || n === 1){
    return n;
   }
   
   let first = 0, second = 1;

   for(let i = 1 ; i < n ; i++){
    [first, second] = [second, first + second]
   }

   return second
};
// @lc code=end

