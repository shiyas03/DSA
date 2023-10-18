class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.front = null
        this.rear = null
    }

    enqueue(value){
        let node = new Node(value)
        if(this.front == null){
            this.front = node
            this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
    }

    dequeue(){
        if(this.front !== null){
            let cur = this.front.next
            this.front.next = null
            this.front = cur
        }
    }

    display(){
        let cur = this.front
        while(cur){
            console.log(cur.value);
            cur = cur.next
        }
    }
}

let queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.dequeue()
queue.display()