//https://leetcode.com/problems/count-the-number-of-consistent-strings/

var countConsistentStrings = function (allowed, words) {
    let k = words.length;
    words.forEach((el) => {
        for (let i = 0; i < el.length; i++) {
            if (!allowed.includes(el[i])) {
                k--
                break;
            }
        }

    })
    return k
};
console.log(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]))
console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]))