const twoSum = (arr, target) => {
    // generate an array of opposite pairs
    const diffs = arr.map(el => target - el)

    // walk input arr and see if any diffs match
    for (var i = 0; i < arr.length; i++) {
        let j = diffs.findIndex(el => arr[i] - el === 0)
        if (j > 0) {
            return [i, j]
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
