let arr = [1, 3, 5, 4, 2, 9, 6]

let j;
let c;
for (let i = 0; i < arr.length; i++) {
    c = arr[i]
    j = i - 1
    while (j >= 0 && arr[j] > c) {
        arr[j + 1] = arr[j]
        j--
    }
    arr[j + 1] = c
}

console.log(arr);




