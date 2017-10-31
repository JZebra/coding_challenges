// https://leetcode.com/problems/gas-station/description/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
  const netGas = gas.map((gasAmt, idx) => {
    return gasAmt - cost[idx];
  });

  // check that total gas at stations > total cost of travel
  const isPossible = netGas.reduce((acc, cur) => { return acc + cur }) >= 0;
  if (isPossible) {
    for (let startIdx = 0; startIdx < netGas.length; startIdx++) {
      let curIdx = startIdx;
      let gasLeft = netGas[startIdx];
      while (gasLeft >= 0) {
        curIdx += 1;
        // wrap around
        if (curIdx === netGas.length) {
          curIdx = 0;
        }
        // finished loop
        if (curIdx === startIdx) {
          return startIdx;
        }
        gasLeft += netGas[curIdx];
      }
    }
  }
  return -1;
};

// console.log(canCompleteCircuit([4], [5]));
// console.log(canCompleteCircuit([5], [4]));
// console.log(canCompleteCircuit([6, 1, 4, 3, 5], [3, 8, 2, 4, 2]));
