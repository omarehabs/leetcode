// const isNumber = function (s) {
//   for (let i = 0; i < s.length; i++) {
//     // if (s[i] === '-') return true;
//     const isE = s[i] === 'e' || s[i] === 'E';
//     const plusOrMin = s[i] === '-' || s[i] === '+';
//     const isDot = s[i] === '.';
//     let thereIsE = false;
//     let thereIsDot = false;
//     let thereIspom = false;

//     if (i === 0) {
//       console.log('first if i = 0');
//       if (parseInt(s[i]) === typeof 'number') continue;

//       if (isDot) {
//         if (!s[i + 1]) return false;
//         if (parseInt(s[i + 1]) !== typeof 'number') return false;

//         thereIsDot = 0;
//         continue;
//       }

//       if (plusOrMin) {
//         thereIspom = 0;
//         continue;
//       }

//       return false;
//     }

//     if (isE) {
//       if (thereIsE !== false) return false;

//       if (parseInt(s[i - 1]) !== typeof 'number') return false;

//       if (!s[i + 1]) return false;

//       if (parseInt(s[i + 1]) === typeof 'number') {
//         thereIsE = i;
//         continue;
//       }

//       if (s[i + 1] === ('+' || '-')) {
//         thereIsE = i;
//         continue;
//       }
//     } else {
//       return false;
//     }

//     if (isDot) {
//       if (thereIsDot !== false) return false;

//       if (thereIsE !== false) return false;

//       if (parseInt(s[i - 1]) === typeof 'number') {
//         thereIsDot = i;
//         continue;
//       }

//       if (s[i - 1] === plusOrMin) {
//         thereIsDot = i;
//         continue;
//       }

//       // if()

//       if (!s[i + 1]) {
//         thereIsDot = i;
//         return true;
//       }
//       if (parseInt(s[i + 1]) !== typeof 'number') return false;
//     } else {
//       return false;
//     }

//     if (plusOrMin) {
//       if (thereIsE !== false) return false;

//       if (s[i - 1] === ('e' || 'E')) {
//         if (parseInt(s[i + 1]) !== typeof 'number') return false;
//         thereIspom = i;
//         continue;
//       }
//     } else {
//       return false;
//     }
//   }
// };


const isNumber = function(s) {
    return /^(((\+|\-)?((\d*\.?\d+)|(\d+\.\d*)|(\d+e(\+|\-)?\d+)|(\d+\.\d+e(\+|\-)?\d+)|(\d+\.\d*e(\+|\-)?\d+)|(\d+\.\d*e(\+|\-)?\d+)|(\d*\.\d+e(\+|\-)?\d+))))$/ig.test(s)
};
console.log(isNumber('53.5e93'));
console.log(isNumber("0"));
console.log(isNumber("e"));
console.log(isNumber("e9"));
console.log(isNumber("."));
console.log(isNumber('99e2.5'));
console.log(isNumber("53.5e93"));
console.log(isNumber("+6e-1"));
console.log(isNumber("3e+7"));
console.log(isNumber('-90E3'));
console.log(isNumber('0089'));
console.log(isNumber("-123.456e789"));
