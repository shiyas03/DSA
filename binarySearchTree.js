class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Binary {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)
        if (this.root == null) {
            this.root = node
        } else {
            this.insertValue(this.root, node)
        }
    }

    insertValue(root, node) {
        if (root.value > node.value) {
            if (root.left == null) {
                root.left = node
            } else {
                this.insertValue(root.left, node)
            }
        } else {
            if (root.right == null) {
                root.right = node
            } else {
                this.insertValue(root.right, node)
            }
        }
    }

    inOrder(root = this.root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    preOrder(root = this.root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOrder(root = this.root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder() {
        if (this.root !== null) {
            let queue = []
            queue.push(this.root)
            while (queue.length) {
                let cur = queue.shift()
                console.log(cur.value);
                if (cur.left) {
                    queue.push(cur.left)
                }
                if (cur.right) {
                    queue.push(cur.right)
                }
            }
        }
    }

    min(root = this.root) {
        if (!root.left) {
            console.log(root.value)
        } else {
            this.min(root.left)
        }
    }
 
    max(root = this.root) {
        if (!root.right) {
            console.log(root.value)
        } else {
            this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root == null) {
            console.log("value not found")
            return root
        }

        if (root.value > value) {
            root.left = this.deleteNode(root.left, value)
        } else if (root.value < value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }

            if (!root.left) {
                return root.right
            }

            if (!root.right) {
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, value)
        }
        return root
    }

    isBst() {
        if (this.root !== null) {
            let queue = []
            queue.push(this.root)
            while (queue.length) {
                let cur = queue.shift()
                if (cur.left) {
                    if (cur.left.value > cur.value) {
                        return false
                    }
                    queue.push(cur.left)
                }

                if (cur.right) {
                    if (cur.right.value < cur.value) {
                        return false
                    }
                    queue.push(cur.right)
                }
            }
            return true
        }
    }

    search(value, root = this.root) {
        if (root == null) {
            return false
        } else {
            if(root.value > value){
                return this.search(value,root.left)
            }else if(root.value < value){
                return this.search(value,root.right)
            }else{
                return true
            }
        }
    }

    closestValue(){
        
    }
}


let tree = new Binary()
tree.insert(10)
tree.insert(5)
tree.insert(1)
tree.insert(7)
tree.insert(20)
tree.insert(15)
tree.insert(25)

// tree.inOrder()
// tree.preOrder()
// tree.postOrder()
// tree.levelOrder()
// tree.min()
// tree.max()
tree.delete(13)

tree.inOrder()

console.log(tree.isBst());
console.log(tree.search(19))