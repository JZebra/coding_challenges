// https://leetcode.com/problems/group-anagrams/description/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const letters = (str) => { str.split('').sort(); };

const groupAnagrams = (strs) => {
  const seenMap = {};
  strs.forEach((word) => {
    const wordLetters = letters(word);
    if (wordLetters in seenMap) {
      seenMap[wordLetters].push(word);
    } else {
      seenMap[wordLetters] = [word];
    }
  });

  return Object.values(seenMap).map((wordList) => { return wordList.sort(); });
};
