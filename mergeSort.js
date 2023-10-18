
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let fh = arr.slice(0, mid)
    let sh = arr.slice(mid)
    return join(mergeSort(fh), mergeSort(sh))
}

function join(fh, sh) {
    let array = []
    let i = 0
    let j = 0
    while (i < fh.length && j < sh.length) {
        if (fh[i] <= sh[j]) {
            array.push(fh[i++])
        } else {
            array.push(sh[j++])
        }
    }

    while (i < fh.length) {
        array.push(fh[i++])
    }

    while (j < sh.length) {
        array.push(sh[j++])
    }

    return array
}

let array = [1, 3, 5, 2, 4, 7]
let newArray = mergeSort(array)
console.log(newArray);