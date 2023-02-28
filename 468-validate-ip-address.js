const validIPAddress = function (queryIP) {
    if (/^((((25[0-5])|(2[0-4][0-9])|(1[0-9][0-9])|([1-9]?[0-9]))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9][0-9])|([1-9]?[0-9])))$/ig.test(queryIP)) return 'IPv4'

    if (/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4})$/ig.test(queryIP)) return 'IPv6'
    return 'Neither'

};

console.log(validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334"))
console.log(validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334:"))
console.log(validIPAddress("2001:0db8:85a3::8A2E:037j:7334"))
console.log(validIPAddress("02001:0db8:85a3:0000:0000:8a2e:0370:7334"))
console.log(validIPAddress("192.168.1.0"))
console.log(validIPAddress("192.168.01.1"))
console.log(validIPAddress("192.168.1.00"))
console.log(validIPAddress("192.168@1.1"))
console.log(validIPAddress("02.168.01.1"))