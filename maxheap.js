class Heap {
    constructor() {
        this.heap = []
    }

    create(arr) {
        this.heap = arr
        let end = Math.floor(this.heap.length - 1)
        for (let i = end; i >= 0; i--) {
            this.shiftDown(i)
        }
    }

    shiftDown(curId) {
        let endId = this.heap.length - 1
        let leftId = this.leftId(curId)
        while (leftId <= endId) {
            let rightId = this.rightId(curId)
            let shiftId
            if (rightId <= endId && this.heap[rightId] > this.heap[leftId]) {
                shiftId = rightId
            } else {
                shiftId = leftId
            }

            if (this.heap[shiftId] > this.heap[curId]) {
                this.swap(this.heap, shiftId, curId)
                curId = shiftId
                leftId = this.leftId(curId)
            } else {
                return;
            }
        }
    }

    shiftUp(curId) {
        let parentId = Math.floor(this.parentId(curId))
        while (curId > 0 && this.heap[curId] > this.heap[parentId]) {
            this.swap(this.heap, parentId, curId)
            curId = parentId
            parentId = Math.floor(this.parentId(curId))
        }
    }

    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }

    remove() {
        this.swap(this.heap, 0, this.heap.length - 1)
        this.heap.pop()
        this.shiftDown(0)
    }

    display() {
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i]);
        }
    }

    leftId(i) {
        return (i * 2) + 1
    }

    rightId(i) {
        return (i * 2) + 2
    }

    parentId(i) {
        return (i - 1) / 2
    }

    swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

let array = [1, 2, 3, 4, 5]
let heap = new Heap()
heap.create(array)
heap.insert(6)
heap.remove()
heap.display()