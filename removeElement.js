const removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] === val ? (nums[i] = undefined) : k++;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === undefined && nums[j] !== undefined) {
        nums[i] = nums[j];
        nums[j] = undefined;
      }
    }
  }
  console.log(nums);
  return nums;
};

console.log(removeElement([3, 2, 2, 3], 3));
