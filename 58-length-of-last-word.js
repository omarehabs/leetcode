//https://leetcode.com/problems/length-of-last-word/

const lengthOfLastWord = function (s) {
  // const words = s.trim().split(' ');
  // return words[words.length - 1].length;
  //------------------------------------------
  //Solution with REGEX
  const arr = s.trim().match(/(\s\w+)|(^\w+$)/ig)
  return arr[arr.length - 1].trim().length
};

console.log(lengthOfLastWord('LeetCode problems are not easy   '));
