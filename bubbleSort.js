let array = [1, 3, 5, 4, 2, 9, 6]
let length = array.length

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < length; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }
    }
}

console.log(array);