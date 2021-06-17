var sortedSquares = function (nums) {
  let len = nums.length;
  let left = 0;
  let right = len - 1;

  const result = new Array(len);
  let counter = len - 1;

  while (left <= right) {
    let squareLeft = nums[left] ** 2;
    let squareRight = nums[right] ** 2;

    if (squareLeft > squareRight) {
      result[counter] = squareLeft;
      left++;
    } else {
      result[counter] = squareRight;
      right--;
    }
    counter--;
  }

  return result;
};

// Optimize
// [4, 6, 2, 6, 78]

var findNumbers = function (nums) {
  return nums.map(el => el ** 2).sort((a, b) => a - b);
};
// sort a, b return > 0, sort b before a
// sort a, b return < 0, a, b the same

// function compare(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }
