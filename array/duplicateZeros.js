/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

const duplicateZeros = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === 0) {
      arr.splice(i, 0, 0);
      i++;
      arr.pop();
    }
  }
};

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = arr => {
  let tmp = [];

  for (let i = 0; i < arr.length; i++) {
    if (tmp.length) {
      tmp.unshift(arr[i]);
      arr[i] = tmp.pop();
    }

    if (arr[i] === 0 && i + 1 <= arr.length - 1) {
      tmp.unshift(arr[i + 1]);
      arr[i + 1] = 0;
      i++;
    }
  }
};
