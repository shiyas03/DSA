class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
    }

    push(value){
        let node = new Node(value)

        if(this.top == null){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
    }

    pop(){
        if(this.top !== null){
            let cur = this.top.next
            this.top.next = null
            this.top = cur
        }
    }

    display(){
        let cur = this.top
        while(cur){
            console.log(cur.value)
            cur = cur.next
        }
    }
}

let stack = new Stack()
stack.push(10)
stack.push(20)
stack.pop()
stack.display()