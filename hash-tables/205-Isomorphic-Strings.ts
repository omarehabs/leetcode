function isIsomorphic(s: string, t: string): boolean {

    
    const sHash = {}
    const tHash = {}

    for (let i = 0; i < t.length; ++i) {
        if (tHash[s[i]] && tHash[s[i]] !== t[i]
            || sHash[t[i]] && sHash[t[i]] !== s[i]) {

            return false
        }
        tHash[s[i]] = t[i]
        sHash[t[i]] = s[i]
    }
    return true

};