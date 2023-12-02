from collections import defaultdict

class Solution(object):
    def countCharacters(self, words, chars):
        """
        :type words: List[str]
        :type chars: str
        :rtype: int
        """
        chars_count = defaultdict(int)
        for char in chars:
            chars_count[char] += 1

        result = 0

        for word in words:
            word_count = defaultdict(int)
            for char in word:
                word_count[char] += 1

            if all(word_count[c] <= chars_count[c] for c in word_count):
                result += len(word)

        return result

# Example usage:
solution = Solution()
words_example1 = ["cat", "bt", "hat", "tree"]
chars_example1 = "atach"
print(solution.countCharacters(words_example1, chars_example1))  # Output: 6

words_example2 = ["hello", "world", "leetcode"]
chars_example2 = "welldonehoneyr"
print(solution.countCharacters(words_example2, chars_example2))  # Output: 10
