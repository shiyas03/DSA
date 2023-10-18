function binary(target, arr) {
    let end = arr.length - 1
    let start = 0
    while (start <= end) {
        let middle = start + (end - start / 2)
        if (arr[middle] == target) {
            return middle
        } else if (arr[middle] > target) {
            end = middle - 1
        } else {
            end = middle + 1
        }
    }
    return -1
}

let array = [1, 2, 3, 4, 5, 6]
let result = binary(7, array)
console.log(result);