const lengthOfLastWord = function (s) {
  const words = s.trim().split(' ');
  return words[words.length - 1].length;
};

console.log(lengthOfLastWord('LeetCode problems are not easy   '));
