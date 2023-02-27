var shuffle = function (nums, n) {
    for (let i = 1; i < n * 2; i += 2) nums.splice(i, 0, nums[n + i - 1])
    return nums.slice(0, 2 * n)
};

console.log(shuffle([2,5,1,3,4,7], 3))
console.log(shuffle([1,2,3,4,4,3,2,1], 4))