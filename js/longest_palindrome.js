/**
 * @param {string} s
 * @return {string}
 */

 // brute force
// const longestPalindromeBF = str => {
//     if (str.length < 2) {
//         return str
//     }
//     let longest = '';
//     // optimization, break early if we close to the end of the string
//     for (var i = 0; i < (str.length - longest.length); i++) {
//         // slice(0, str.length) will miss the last letter
//         for (var j = i; j < str.length + 1; j++) {
//             // optimization, early skip if substr is too short
//             if ((j - i) < longest.length) {
//                 continue
//             }
//             let current = str.slice(i, j)
//             if (isPalindrome(current)) {
//                 longest = current;
//             }
//             str[i]
//         }
//     }

//     return longest
// };

// Manacher's algorithm implementation
const longestPalindrome = str => {
    const delim = '#'
    // remove # chars
    const transformed = str.split('').map(char => delim + char).concat(delim).join('');
    const lengths = transformed.split('').map((char, i, arr) => getPalLength(arr, i))
    const longestLen = lengths.reduce((acc, cur) => Math.max(acc, cur));
    const position = lengths.findIndex(len => len === longestLen);
    // slice is inclusive on the front but exclusive on the back. +1 to the start fixes this.
    const start = position - longestLen + 1;
    const end = position + longestLen;
    const regex = new RegExp(delim, 'g');
    return transformed.slice(start, end).replace(regex, '')
}

const getPalLength = (str, idx) => {
    let length = 0;
    let left = '';
    let right = '';
    while (left === right && idx - length > 0 && idx + length < str.length) {
        length++
        left = str[idx - length]
        right = str[idx + length]
    }
    return length
}

const isPalindrome = str => {
    return str === str.split('').reverse().join('');
}


// console.log(longestPalindromeBF("cbbd"))
// console.log(longestPalindromeBF("babad"))
// console.log(longestPalindromeBF("bb"))
// console.log(longestPalindromeBF("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))

console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("bb"))
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))
