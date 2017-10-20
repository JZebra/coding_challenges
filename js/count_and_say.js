// https://leetcode.com/problems/count-and-say/description/

const getNextSequence = (seq) => {
  let newSeq = '';
  let count = 1;
  let currentChar = seq[0];
  for (let i = 1; i < seq.length + 1; i++) {
    const char = seq[i];
    if (char === currentChar) {
      count += 1;
    } else {
      newSeq += count + currentChar;
      currentChar = char;
      count = 1;
    }
  }
  return newSeq;
};

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  // first sequence is always '1';
  let currentSeq = '1';
  for (let i = 1; i < n; i++) {
    currentSeq = getNextSequence(currentSeq);
  }
  return currentSeq;
};

// console.log(getNextSequence('11'));
// console.log(getNextSequence('111221));
console.log(countAndSay(2));
console.log(countAndSay(3));
