const divide = function(dividend, divisor) {
   
    const twoToPow31 = Math.pow(2, 31)
    const dividendSigned = Math.sign(dividend)
    const divisorSigned = Math.sign(divisor)
    const positiveQuetionet = divisorSigned === dividendSigned

    if (dividendSigned < 0) dividend = -1 * dividend
    if (divisorSigned < 0) divisor = -1 * divisor

    if (dividend === 0) return 0
    if (divisor === 1) {

        if (positiveQuetionet && dividend  > twoToPow31- 1) return twoToPow31 - 1
        if (!positiveQuetionet && dividend > twoToPow31) return 1 * twoToPow31
        return positiveQuetionet ? dividend : -1 * dividend
    }


    let i = 1
    let quetionet = dividend


    while (quetionet >= 0) {
        quetionet = quetionet - divisor
        i++
    }
    if (quetionet < 0) i--

    if (positiveQuetionet && i > twoToPow31) return twoToPow31 - 1
    if (!positiveQuetionet && (i - 1) > twoToPow31) return -1 * twoToPow31
    return positiveQuetionet ? i - 1 : -(i - 1)
};