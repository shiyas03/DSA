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

    node(pos) {
        let slow = this.head
        let fast = this.head

        while (fast && fast.next) {
            slow = slow.next
            let i = 0
            while (i < pos) {
                fast = fast.next
                i++
            }
        }
        console.log(slow.value);
    }

    print() {
        let cur = this.head
        while (cur) {
            console.log(cur.value)
            cur = cur.next
        }
    }
}

let list = new linkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(2)
list.append(5)

list.node(2)