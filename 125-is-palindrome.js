// const letters = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z',
// ];
// const p = s
//   .toLowerCase()
//   .trim()
//   .split('')
//   .filter((el) => {
//     return letters.indexOf(el) !== -1 || parseInt(el) || parseInt(el) === 0;
//   });
// return p.join('') === p.reverse().join('');

const isPalindrome = function (s) {
  s = s.toLowerCase().replaceAll(/[^0-9a-z]/ig, '')
  console.log(s.slice(-1, 0))
  return s === s.split('').reverse().join('')
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome("0P"));
