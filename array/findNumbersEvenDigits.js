var findNumbers = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let countDigit = 1;

    while ((nums[i] = nums[i] / 10) >= 1) {
      countDigit++;
    }
    if (countDigit % 2 === 0) {
      count++;
    }
  }

  return count;
};
