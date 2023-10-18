class Heap {
    constructor() {
        this.heap = []
    }

    minHeap(arr) {
        this.heap = arr
        let end = this.parentIndex(this.heap.length - 1)
        for (let i = end; i >= 0; i--) {
            this.shiftDown(i)
        }
    }

    shiftDown(curId) {
        let endId = this.heap.length - 1
        let leftId = this.leftIndex(curId)
        while (leftId <= endId) {
            let rightId = this.rightIndex(curId)
            let shiftId
            if (rightId <= endId && this.heap[rightId] < this.heap[leftId]) {
                shiftId = rightId
            } else {
                shiftId = leftId
            }

            if (this.heap[shiftId] < this.heap[curId]) {
                this.swap(this.heap, shiftId, curId)
                curId = shiftId
                leftId = this.leftIndex(curId)
            } else {
                return;
            }
        }
    }

    shiftUp(curId) {
        let parentId = Math.floor(this.parentIndex(curId))
        while (curId > 0 && this.heap[curId] < this.heap[parentId]) {
            this.swap(this.heap, curId, parentId)
            curId = parentId
            parentId = Math.floor(this.parentIndex(curId))
        }
    }

    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }

    display() {
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i])
        }
    }

    swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    leftIndex(i) {
        return (i * 2) + 1
    }

    rightIndex(i) {
        return (i * 2) + 2
    }

    parentIndex(i) {
        return (i - 1) / 2
    }

    remove() {
        this.swap(this.heap, 0, this.heap.length - 1)
        this.heap.pop()
        this.shiftDown(0)
    }
}

let array = [5, 8, 2, 4, 3, 7]
let hp = new Heap()
hp.minHeap(array)
hp.insert(1)
hp.remove()
hp.display()