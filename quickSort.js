function sort(arr) {
    let l = arr.length - 1
    quickSort(arr, 0, l)
    return arr
}

function quickSort(arr, start, end) {
    if (start >= end) {
        return arr
    }

    let pivot = start
    let left = start + 1
    let right = end

    while (left <= right) {
        if (arr[pivot] < arr[left] && arr[pivot] > arr[right]) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
        }

        if (arr[pivot] > arr[left]) {
            left++
        }

        if (arr[pivot] < arr[right]) {
            right--
        }
    }

    let temp = arr[pivot]
    arr[pivot] = arr[right]
    arr[right] = temp
    
    quickSort(arr, start, right - 1)
    quickSort(arr, right + 1, end)
}

let array = [1, 3, 5, 2, 6, 4]
let result = sort(array)
console.log(result);