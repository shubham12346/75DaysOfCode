
// Code
// Testcase
// Testcase
// Result

// 714. Best Time to Buy and Sell Stock with Transaction Fee
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

// Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

// Note:

// You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
// The transaction fee is only charged once for each stock purchase and sale.
 

// Example 1:

// Input: prices = [1,3,2,8,4,9], fee = 2
// Output: 8
// Explanation: The maximum profit can be achieved by:
// - Buying at prices[0] = 1
// - Selling at prices[3] = 8
// - Buying at prices[4] = 4
// - Selling at prices[5] = 9
// The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
// Example 2:

// Input: prices = [1,3,7,5,10,3], fee = 3
// Output: 6


function maxProfit(prices: number[], fee: number): number {
    let cash = 0; 
    let hold = -prices[0]; 

    for (let day = 1; day < prices.length; day++) {
        const prevCash = cash;
        cash = Math.max(cash, hold + prices[day] - fee); 
        hold = Math.max(hold, prevCash - prices[day]); 
    }
    return cash;
}
