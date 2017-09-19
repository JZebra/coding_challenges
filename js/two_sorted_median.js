/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    var a = nums1.concat(nums2).sort((a,b) => a - b)
    return median(a);
};

// assumes sorted array
const median = arr => {
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 1) {
        return arr[mid]
    } else {
        return (arr[mid] + arr[mid - 1]) / 2
    }
}

console.log(findMedianSortedArrays([3, 4], [1,2,3,4,5]))
console.log(findMedianSortedArrays([1], [2,3,4,5,6,7,8,9,10]))
console.log(findMedianSortedArrays([1,2], [3,4]))
