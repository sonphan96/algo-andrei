//
const binarySearch = function (array, target) {
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    const foundVal = array[mid];

    if (foundVal === target) {
      return foundVal;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

// Time: O log(n)
// Space: O (1)
