/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

    const sHash = {}
    const tHash = {}

    s = s.replace(/constructor/g, 'const')
    s = s.split(' ')
    if (s.length !== pattern.length) return false
    for (let i = 0; i < pattern.length; ++i) {
        if (tHash[s[i]]!== undefined && (tHash[s[i]] !== pattern[i])
            || sHash[pattern[i]] !== undefined&& (sHash[pattern[i]] !== s[i])) {

            return false
        }
        tHash[s[i]] = pattern[i]
        sHash[pattern[i]] = s[i]
    }
    return true

};