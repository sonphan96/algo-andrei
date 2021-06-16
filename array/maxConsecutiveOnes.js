const findMaxConsecutiveOnes = function (nums) {
  let maxConsecutiveOnes = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1;
    } else {
      maxConsecutiveOnes = Math.max(count, maxConsecutiveOnes);
      count = 0;
    }
  }

  return Math.max(maxConsecutiveOnes, count);
};
