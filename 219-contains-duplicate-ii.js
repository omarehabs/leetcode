//https://leetcode.com/problems/contains-duplicate-ii/

// var containsNearbyDuplicate = function (nums, k) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (Math.abs(map.get(nums[i]) - i) <= k) return true;

//         else {
//             map.set(nums[i], i)
//         }
//     }
//     return false;
// };

var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i !== j && Math.abs(i - j) <= k) {
                return true
            }
        }
    }
    return false
};


console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))