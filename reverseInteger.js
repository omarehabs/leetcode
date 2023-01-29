const reverse = function (x) {
  let postive = true;
  if (Math.sign(x) === -1) {
    postive = false;
    x = -x;
  }

  const reversedInt = parseInt(
    Array.from(x.toString())
      .reverse()
      .reduce((m, n) => m + n)
  );

  const pwr31to2 = Math.pow(2, 31); // 2147483648
  if (reversedInt <= pwr31to2 - 1 && postive) return reversedInt;
  if (reversedInt <= pwr31to2 && !postive) return -1 * reversedInt;

  return 0;
};
console.log(reverse(1563847412), Math.pow(2, 31));
