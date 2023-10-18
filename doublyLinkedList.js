class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class List {
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
            node.prev = this.tail
            this.tail = node
        }
    }

    prepend(value) {
        const node = new Node(value)
        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
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

let list = new List()
list.append(10)
list.append(20)
list.reverse()
list.print()