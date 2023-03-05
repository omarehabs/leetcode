// https://leetcode.com/problems/reverse-words-in-a-string/

const reverseWords = function (s) {
    return s.trim().replaceAll(/\s+/ig, ' ').split(' ').reverse().join(' ')
};

console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))
console.log(reverseWords("the sky is blue"))