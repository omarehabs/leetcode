var isValid = function (s) {
  s = Array.from(s.replace(/\s+/g, ''));
  const strs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let valid = false;

  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === strs[arr[arr.length - 1]]) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }

  arr.length === 0 ? (valid = true) : (valid = false);
  return valid;
};
console.log(isValid(' () [ {}] [[{}]] []'));
