const twoSumNaive = (arr, target) => {
    // generate an array of opposite pairs
    const diffs = arr.map(el => target - el)

    // walk input arr and see if any diffs match
    for (var i = 0; i < arr.length; i++) {
        let j = diffs.findIndex((el, idx) => arr[i] - el === 0 && idx !== i)
        if (j > 0) {
            return [i, j]
        }
    }
}

// faster solution with hashmap and one walk
const twoSum = (arr, target) => {
    let elMap = new Map()

    for (var i = 0; i < arr.length; i++) {
        let val = arr[i];
        let pairedIdx = elMap.get(target - val)
        if (pairedIdx !== undefined && pairedIdx !== i) {
            return [pairedIdx, i]
        }
        elMap.set(val, i)
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 3], 6))
