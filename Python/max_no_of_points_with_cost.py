# https://leetcode.com/problems/maximum-number-of-points-with-cost/

class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:

        rows, cols = len(points), len(points[0])
        dp = {}

        def dfs(r, c):
            if r >= rows or c >= cols:
                return 0

            if (r, c) in dp:
                return dp[(r, c)]

            curGain = 0

            for i in range(cols):
                curGain = max(curGain, points[r][c] + dfs(r + 1, i) - abs(i - c))
            dp[(r, c)] = curGain
            return curGain

        res = 0
        for c in range(cols):
            res = max(res, dfs(0, c))

        return res
