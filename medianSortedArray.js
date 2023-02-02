const merge = function (list1, list2) {
  let i = 0;
  let j = 0;
  const mergedList = [];

  for (let m = 0; m < list1.length + list2.length; m++) {
    list1[i] < list2[j] || list2[j] === undefined
      ? mergedList.push(list1[i++]) //!list2[j]
      : mergedList.push(list2[j++]); //!list1[i];
  }

  const midIndex = mergedList.length / 2;
  const floorMidIndex = Math.floor(midIndex);

  if (midIndex === floorMidIndex) {
    return (mergedList[floorMidIndex] + mergedList[floorMidIndex - 1]) / 2;
  }
  return mergedList[floorMidIndex];
};
console.log(merge([0, 0], [0, 0, 0]));
