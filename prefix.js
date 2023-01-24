function longestCommonPrefix(strs) {
  let output = [];
  const first = strs[0];
  let toAdd = false;

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (first[i] === strs[j][i]) {
        toAdd = true;
      } else {
        toAdd = false;
        break;
      }
    }

    if (toAdd) {
      output[i] = first[i];
    } else {
      break;
    }
  }
  return output.join('');
}
console.log(longestCommonPrefix(['aaa', 'aa', 'aaa']));
