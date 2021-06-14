// two sum

// brute force
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // 1
    const complement = target - nums[i]; // 9

    for (let j = i + 1; j < nums.length; j++) {
      // 2
      if (nums[j] === complement) {
        return [i, j];
      }
    }
  }

  return null; // O(n^2)
};

// hash map  [1, 7, 9, 2]  11
const twoSum2 = function (nums, target) {
  const numsMap = {}; // { 10: 0, 4: 1, 2: 2 , 9: 3 }
  for (let p = 0; p < nums.length; p++) {
    // 2
    const currentMapValue = numsMap[nums[p]]; // 1
    if (currentMapValue >= 0) {
      return [currentMapValue, p]; // 1 2
    } else {
      const numberToFind = target - nums[p]; // 9
      numsMap[numberToFind] = p; // 10
    }
  } // O (n)
  return null;
};
