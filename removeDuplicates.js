const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums[j] = undefined;
      }
    }
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === undefined && nums[j] !== undefined) {
        nums[i] = nums[j];
        nums[j] = undefined;
      }
    }
  }
  kArr = nums.filter((value) => {
    return value !== undefined;
  });

  return kArr.length;
};

console.log(removeDuplicates([-1, 0, 0, 0, 0, 3, 3]));
