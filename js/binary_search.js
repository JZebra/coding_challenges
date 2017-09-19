// implement binary search
const bsearch = (arr, target) => {
    let workingArr = arr.sort((a, b) => a - b)
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let pivot = Math.floor((left + right) / 2)
        if (target === workingArr[pivot]) {
            return pivot
        } else if (target > workingArr[pivot]) {
            left = pivot + 1
        } else if (target < workingArr[pivot]) {
            right = pivot - 1
        }
    }
    // target not found
    return null
}

// console.log(bsearch([4,12,6,3,55,2], 12))

module.exports = {
    bsearch: bsearch
}
