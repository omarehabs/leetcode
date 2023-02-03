class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        strings = [str(x) for x in digits]
        parsed = int(''.join(strings))+1
        return [int(x) for x in str(parsed)]


p = Solution()
print(p.plusOne([

    6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 6, 6, 7, 0, 5, 6, 8, 6, 7,
    0, 5, 6, 6, 7, 0, 5, 6, 8, 6, 7, 0, 5, 6, 6, 7, 0, 5, 6, 8, 6, 7, 0, 5, 6,
    6, 7, 0, 5, 6, 8, 6, 7, 0, 5, 6, 6, 7, 0, 5, 6, 7, 0, 5, 6, 8, 6, 7, 0, 5,
    6, 6, 7, 0, 5, 6, 8, 6, 7, 0, 5, 6, 6, 7, 0, 5, 6, 7, 0, 5, 6, 8, 6, 7, 7,
]))
