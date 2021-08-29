// [1 ,5 ,23 ,31],  [2, 4,  6, 32]
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i,
    j = 0;
  let item1 = arr1[i];
  let item2 = arr2[j];

  // Check valid input
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1 || arr2) {
    if (!item2 || item1 <= item2) {
      mergedArray.push(item1);
      i++;
      item1 = arr1[i];
    } else {
      mergedArray.push(item2);
      j++;
      item2 = arr2[j];
    }
  }

  return mergedArray;
}
