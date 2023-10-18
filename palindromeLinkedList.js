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

    isPalindrome() {
        function reverseLinkedList(node) {
            let prev = null;
            let current = node;

            while (current) {
                let next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }

            return prev;
        }

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let reversedHalf = reverseLinkedList(slow);

        while (reversedHalf) {
            if (reversedHalf.value !== this.head.value) {
                return false;
            }
            reversedHalf = reversedHalf.next;
            this.head = this.head.next;
        }

        return true;
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
// list.print()

const isPalindrome = list.isPalindrome();
console.log(isPalindrome); 