// const numUniqueEmails = function (emails) {
//     for (let i = 0; i < emails.length; i++) {
//         const temp = emails[i].replace(/\+(\w|\W)*\@/ig, '@').split('@')
//         temp[0] = temp[0].replaceAll(/\./ig, '')
//         emails[i] = temp.join('@')
//     }
//     return new Set(emails).size
// };
const numUniqueEmails = function (emails) {
    for (let i = 0; i < emails.length; i++) {
        const [p, at] = [emails[i].indexOf('+'), emails[i].indexOf('@')]
        emails[i] = (p === -1 ?
            emails[i].slice(0, at).replaceAll('.', '') :
            emails[i].slice(0, p).replaceAll('.', ''))
            + emails[i].slice(at)

    }
    return new Set(emails).size
};

console.log(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]))
console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))
// console.log("test.email+alex@leetcode.com".replaceAll(/\+\w*\@/ig, '@').replaceAll(/\./ig, ''))