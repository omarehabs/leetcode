/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote,  magazine){
    let magazineObj= {};

    for (let i = 0; i < magazine.length; ++i) {
        if (magazineObj[magazine[i]]) {
            ++magazineObj[magazine[i]]
        } else {
            magazineObj[magazine[i]] = 1
        }
    }

    for (let i = 0; i < ransomNote.length; ++i) {
        if (!magazineObj[ransomNote[i]]) { return false }
        else { --magazineObj[ransomNote[i]] }
    }

    return true
};