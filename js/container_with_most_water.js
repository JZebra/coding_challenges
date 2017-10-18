// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
const maxAreaBF = (height) => {
  let currentMax = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      currentMax = Math.max(currentMax, area);
    }
  }

  return currentMax;
};

const maxArea = (height) => {
  let p1 = 0;
  let p2 = height.length - 1;
  let currentMax = 0;
  while (p1 < p2) {
    const area = Math.min(height[p1], height[p2]) * (p2 - p1);
    currentMax = Math.max(currentMax, area);
    // move the pointer with the lower height
    if (height[p1] < height[p2]) {
      p1 += 1;
    } else {
      p2 -= 1;
    }
  }

  return currentMax;
}
