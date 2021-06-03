// brute force solution
// heights = [7, 1, 2, 3, 9]
// area = min(a,b) * (bi - a[i]);
const getMaxWaterContainer = function (heights) {
  let maxArea = 0;

  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;

      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};

// Two Shifting pointers technique

const getMaxWaterContainer2 = function (heights) {
  let p1 = 0;
  let p2 = heights.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;

    maxArea = Math.max(area, maxArea);

    heights[p1] <= heights[p2] ? p1++ : p2--;
  }
  return maxArea;
};
