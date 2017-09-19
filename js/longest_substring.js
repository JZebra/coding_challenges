// Given a string, find the length of the longest substring without repeating characters.
// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// returns an int
function lengthOfLongestSubstring(str) {
    // we could also use a hashmap for constant time lookup
    let seenChars = new Set();
    let longestLen = 0;
    let currentLen = 0;
    let substrStartIdx = 0;
    // we can optimize this sliding window
    for (let i = 0; i < str.length;) {
        let char = str[i];
        if (seenChars.has(char)) {
            seenChars.clear();
            substrStartIdx++
            currentLen = 0;
            i = substrStartIdx;
        } else {
            seenChars.add(char);
            currentLen ++;
            longestLen = currentLen > longestLen ? currentLen : longestLen;
            i++
        }
    }
    return longestLen;
}

console.log(lengthOfLongestSubstring("abcabcbb")) //3
console.log(lengthOfLongestSubstring("bbbbb")) //1
console.log(lengthOfLongestSubstring("pwwkew")) //3
console.log(lengthOfLongestSubstring("dvdf")) //3
console.log(lengthOfLongestSubstring("ohvhjdml")) //6
