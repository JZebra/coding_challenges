// implement binary search
// returns the index of the target
const bsearch = (arr, target, isSorted) => {
  let workingArr = arr;
  if (!isSorted) {
    workingArr = arr.sort((a, b) => a - b);
  }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const pivot = Math.floor((left + right) / 2);
    if (target === workingArr[pivot]) {
      return pivot;
    } else if (target > workingArr[pivot]) {
      left = pivot + 1;
    } else if (target < workingArr[pivot]) {
      right = pivot - 1;
    }
  }
  // target not found
  return null;
};


const bsearchFuzzy = (sorted, target) => {
  let left = 0;
  let right = sorted.length - 1;

  if (target <= sorted[left] || sorted.length === 0) {
    return 0;
  } else if (target > sorted[right]) {
    return sorted.length;
  }

  while (left < right) {
    const pivot = Math.floor((left + right) / 2);
    if (sorted[pivot] < target) {
      left = pivot + 1;
    } else {
      right = pivot;
    }
  }

  return left >= target ? left : right;
};

// console.log(bsearch([4,12,6,3,55,2], 12));
// console.log(bsearch([4,12,6,3,55,2].sort((a,b) => a - b), 12, true));
// console.log(bsearchFuzzy([1, 3, 5, 6, 12, 36], 10)); // 4
// console.log(bsearchFuzzy([1, 3, 5, 6, 12, 14, 36], 13)); // 5
// console.log(bsearchFuzzy([1, 3, 5, 6, 12, 14, 36], 40)); // 7
// console.log(bsearchFuzzy([1, 3, 5, 6, 12, 14, 36], 0)); // 0
// console.log(bsearchFuzzy([], 9999)); // 0
// console.log(bsearchFuzzy([-693,-369,1382,6238,7946,9774], 3439)); // 3

module.exports = { bsearch, bsearchFuzzy };
