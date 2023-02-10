const isPalindrome = function (s) {
    if (Math.sign(s) < 0) return false
    const rev = s.toString().split('').reverse()
    return parseInt(rev.join('')) === s
};