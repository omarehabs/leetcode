//https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

const removeDuplicates = function (nums) {
    let current
    let showed = 0
    let k = nums.length
    for (let i = 0; i < nums.length; i++) {
        if (current === nums[i]) {
            if (showed < 2) { showed++ }
            else {
                nums[i] = undefined
                k--
            }
        } else {
            current = nums[i]
            showed = 1
        }
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === undefined && nums[j] !== undefined) {
                nums[i] = nums[j];
                nums[j] = undefined;
            }
        }
    }

    return k
};
console.log(removeDuplicates([1, 1, 1, 2, 2, 2, 3]))