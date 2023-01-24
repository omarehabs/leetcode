function romanToInt(s) {
  const charsObjValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let ans = 0;
  let num = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    num = charsObjValues[s[i]];

    if (4 * num < ans) {
      ans -= num;
    } else {
      ans += num;
    }
  }

  return ans;
}

const intRoman = romanToInt('MMMMDM');
console.log(intRoman);
