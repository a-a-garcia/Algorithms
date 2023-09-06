// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// var maxProfit = function(prices) {
//     //traverse array
//     //keep track of what value is the lowest
//     //keep track of what value is the highest, 
//     //subtract the highest from the lowest value
//     //if the evaluation of the highest minus the lowest is not at least 1, return 0.

//     let lowestStockPriceIndex = 0;
    
//     for (let i = 0; i < prices.length; i++) {
//         if (lowestStockPriceIndex > prices[lowestStockPriceIndex]) {
//             lowestStockPriceIndex = i
//         }
//     }
//     const sellingPricesArray = prices.slice(lowestStockPriceIndex + 1)
//     let highestStockPrice = sellingPricesArray[0];
    
//     for (let i = 0; i < sellingPricesArray.length; i++) {
//         if (highestStockPrice < sellingPricesArray[i]) {
//             highestStockPrice = sellingPricesArray[i]
//         }
//     }
//     let priceEvaluation = highestStockPrice - prices[lowestStockPriceIndex];
    

//     if (prices.length <= 1) {
//         return 0
//     } else if (priceEvaluation <= 0) {
//         return 0
//     } else {
//         return priceEvaluation
//     }
// };

// console.log(maxProfit([1,2]))


//CORRECT SOLUTION
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }
    
    let lowestStockPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < lowestStockPrice) {
            lowestStockPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - lowestStockPrice);
        }
    }
    
    return maxProfit;
};

console.log(maxProfit([1, 2])); // Output: 1