// https://leetcode.com/problems/trapping-rain-water/description/

/**
 * @param {number[]} heightArr
 * @return {number}
 */
const trap = (heightArr) => {
  let leftMax = heightArr[0];
  // let right = heightArr.length;
  // let rightMax = heightArr[right];
  let sum = 0;

  for (let i = 0; i < heightArr.length - 1; i++) {
    const currentHeight = heightArr[i];
    leftMax = currentHeight > leftMax ? currentHeight : leftMax;
    if (currentHeight < leftMax) {
      // spread to the right until we find a wall that matches leftMax
      let right = i + 1;
      let rightMax = heightArr[right];
      while (rightMax < leftMax && right < heightArr.length - 1) {
        right += 1;
        rightMax = rightMax > heightArr[right] ? rightMax : heightArr[right];
      }

      // take the lesser of leftMax or rightMax
      const waterHeight = rightMax > leftMax ? leftMax : rightMax;
      if (waterHeight > currentHeight) {
        sum += waterHeight - currentHeight;
      }
    }
  }

  return sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) //6
