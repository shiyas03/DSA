class Node {
    constructor(value) {
        this.value = value
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

function mergeList(list1, list2) {
    let current1 = list1.head
    let current2 = list2.head

    const mergedList = new linkedList()
    while (current1 && current2) {
        if (current1.value < current2.value) {
            mergedList.append(current1.value)
            current1 = current1.next
        } else {
            mergedList.append(current2.value)
            current2 = current2.next
        }
    }

    while(current1){
        mergedList.append(current1.value)
        current1 = current1.next
    }

    while(current2){
        mergedList.append(current2.value)
        current2 = current2.next
    }

    return mergedList
}

const list1 = new linkedList()
list1.append(1)
list1.append(3)
list1.append(5)
// list1.print()

const list2 = new linkedList()
list2.append(2)
list2.append(4)
list2.append(6)
// list2.print()

const newlist = mergeList(list1, list2)
let cur = newlist.head
while (cur) {
    console.log(cur.value)
    cur = cur.next
}