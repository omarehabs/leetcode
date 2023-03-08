//https://leetcode.com/problems/missing-number/

const missingNumber = function (nums) {
    const sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i + 1] - sorted[i] === 2) return ++sorted[i]
    }
    if (sorted[sorted.length - 1] === sorted.length) return 0
    return ++sorted[sorted.length - 1]
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([3, 0, 1]))