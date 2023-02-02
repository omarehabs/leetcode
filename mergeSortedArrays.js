const merge = function (nums1, m, nums2, n) {
  let j = 0;

  for (let y = 0; y < m + n; y++) {
    if (nums1[y] > nums2[j]) {
      for (let i = m + j - 1; i >= y; i--) nums1[i + 1] = nums1[i];

      nums1[y] = nums2[j++];
    } else if (y > m + j - 1 && nums1[y] === 0) nums1[y] = nums2[j++];
  }
  console.log(nums1);
};
merge([-1, -1, -1, 0, 0, 0, 0], 4, [4, 10, 18], 3);
