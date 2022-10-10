#You are given an array prices where prices[i] is the price of a given stock on the ith day.

#You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

#Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0

def maxProfit(prices: List[int]) -> int:
    profits=[0]
    if len(prices) < 2:
        return 0
    buy = prices[0]        
    for new in prices:
        if new<buy:
            buy = new
        elif new>= buy:
            profits.append(new-buy)
    return max(profits)
 
prices = [7,1,5,3,6,4]
maxProfit(prices)
