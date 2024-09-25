class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        appears = {}
        for i in nums: 
            if i in appears:
                return True
            else:
                appears[i] = 1
        return False
