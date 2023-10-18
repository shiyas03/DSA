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

    prepend(value) {
        const node = new Node(value)
        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }

    }

    insert(value, position) {
        const node = new Node(value)
        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            let cur = this.head
            let i = 0
            while (cur) {
                i++
                if (i == position) break
                if (cur.next) cur = cur.next
            }

            if (cur.next == null) {
                this.tail = node
            }
            node.next = cur.next
            cur.next = node
        }
    }

    reverse() {
        let pre = null
        let cur = this.head
        while (cur) {
            let next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
        this.head = pre
    }

    cyclic() {
        let fast = this.head
        let slow = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next

            if (fast == slow) {
                return true
            }
        }
        return false
    }

    middle() {
        let fast = this.head
        let slow = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next

            if (!fast.next) {
                console.log(slow.value)
            }
        }
    }

    duplicate() {
        let cur = this.head
        while (cur) {
            if (cur.next && cur.next.value === cur.value) {
                let next = cur.next.next
                cur.next = next
            }
            cur = cur.next
        }
    }

    print() {
        if (this.head == null) {
            console.log("empty list")
        } else {
            let cur = this.head
            while (cur) {
                console.log(cur.value)
                if (cur.next == null) {
                    break;
                }
                cur = cur.next
            }
        }
    }
}


const obj = new linkedList()

obj.append(50)
obj.prepend(30)
obj.prepend(30)
obj.prepend(20)
obj.prepend(10)
obj.prepend(10)
obj.insert(40, 3)
// obj.reverse()
// obj.middle()
obj.duplicate()
obj.print()
// obj.tail.next = obj.head.next
// console.log(obj.cyclic())