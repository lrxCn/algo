/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = Array(amount+1).fill(amount+1);
  dp[0] = 0;
  for(let i = 0; i< dp.length; i++){
    for(let j = 0; j< coins.length; j++){
      if(i<coins[j]){
        continue
      }
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    }   
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
};
// @lc code=end

