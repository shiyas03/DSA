class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        const node = new Node(value)
        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }

    print() {
        let cur = this.head
        while (cur) {
            console.log(cur.value)
            cur = cur.next
        }
    }
}

function addition(list1, list2) {
    const newList = new linkedList()
    let current1 = list1.head
    let current2 = list2.head

    let mod = 0
    let value = 0
    while (current1 && current2) {
        let sum = current1.value + current2.value
        if (sum > 9) {
            mod = sum % 10
            value = Math.floor(sum / 10)
            newList.append(mod)
        } else {
            newList.append(sum + value)
            value = 0
        }
        current1 = current1.next
        current2 = current2.next
    }
    return newList
}

const list1 = new linkedList()
list1.append(2)
list1.append(4)
list1.append(3)

const list2 = new linkedList()
list2.append(5)
list2.append(6)
list2.append(4)

let sumList = addition(list1, list2)
let cur = sumList.head
while (cur) {
    console.log(cur.value)
    cur = cur.next
}

// 7 -> 0 -> 8