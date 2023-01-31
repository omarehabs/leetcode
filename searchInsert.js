const searchInsert = function (nums, target) {
  let foundTarget = false;
  const findEl = function (arr, value) {
    const midIndex = Math.floor(arr.length / 2);
    const midEl = arr[midIndex];

    if (value !== midEl && arr.length === 1) {
      return midEl;
    }

    if (value === midEl) {
      foundTarget = true;
      return value;
    }

    if (value > midEl) return findEl(arr.slice(midIndex), value);
    if (value < midEl) return findEl(arr.slice(0, midIndex), value);
  };

  const found = findEl(nums, target);

  if (!foundTarget && found > target) {
    if (nums.indexOf(found) === 0) return 0;
    return nums.indexOf(found) - 1;
  }

  if (!foundTarget && target > found) return nums.indexOf(found) + 1;

  return nums.indexOf(found);
};

console.log(searchInsert([1, 3, 5, 6], 3));
