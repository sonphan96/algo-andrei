var items = [5, 3, 7, 6, 2, 9];
function swap2(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition2(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap2(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort2(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition2(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort2(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort2(items, index, right);
    }
  }
  return items;
}
// first call to quick sort
var sortedArray = quickSort2(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]

/////////////////// Solution 2  ////////////////////////
const array = [5, 3, 1, 6, 4, 2];
const kToFind = 4;

const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const getPartition = function (nums, left, right) {
  const pivotElement = nums[right];
  let partitionIdx = left;

  for (let j = left; j < right; j++) {
    if (nums[j] <= pivotElement) {
      swap(nums, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(nums, partitionIdx, right);

  return partitionIdx;
};

const quickSort = function (nums, left, right) {
  if (left < right) {
    const partitionIndex = getPartition(nums, left, right);

    quickSort(nums, left, partitionIndex - 1);
    quickSort(nums, partitionIndex + 1, right);
  }
};
