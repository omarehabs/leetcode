var isValid = function (s) {
  s = s.replace(/\s+/g, '');
  const strs = { '(': ')', '{': '}', '[': ']' };
  const arr = [];

  for (let i = 0; i < s.length; i++)
    s[i] === strs[arr[arr.length - 1]] ? arr.pop() : arr.push(s[i]);

  return !arr.length;
};

console.log(isValid(' () [ {{}}] [[{}]] []'));
