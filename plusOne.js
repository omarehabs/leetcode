const plusOne = function (digits) {
  const len = digits.length;

  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] < 9 && i === len - 1) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
    if (digits[i - 1]) {
      if (digits[i - 1] < 9) {
        digits[i - 1]++;
        return digits;
      }
      digits[i - 1] = 0;
      continue;
    }
    digits.unshift(1);
    return digits;
  }
};
console.log(plusOne([1, 9, 9, 9, 9]));
console.log(plusOne([9, 9, 9, 9]));
console.log(plusOne([1]));
console.log(plusOne([0]));
console.log(plusOne([9]));
// console.log([1, 2, 3][-1]);
