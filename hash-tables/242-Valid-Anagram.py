class Solution:
 def isAnagram(self, s: str, t: str) -> bool:
        shash = {}
        thash = {}
        if len(s) != len(t):
            return False
        for i,j in zip(s,t):
            if i in shash:
                shash[i] =  shash[i]  +1
            else:
                shash[i] = 1

            if j in thash:
                thash[j] = thash[j] + 1
            else:
                thash[j] = 1
        if shash == thash:
            return True
        else:
            return False
