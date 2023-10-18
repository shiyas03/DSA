class Trie {
    constructor() {
        this.children = {}
        this.end = false
    }
}

class Prefix {
    constructor() {
        this.root = new Trie()
    }

    insert(word) {
        let cur = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!(char in cur.children)) {
                cur.children[char] = new Trie()
            }
            cur = cur.children[char]
        }
        cur.end = true
    }

    search(word) {
        let cur = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!(char in cur.children)) {
                return false
            }
            cur = cur.children[char]
        }
        return true
    }
}

class Sufix {
    constructor() {
        this.root = new Trie()
    }

    insert(word) {
        for (let i = 0; i < word.length; i++) {
            this.sufInsert(i, word)
        }
    }

    sufInsert(index, word) {
        let cur = this.root
        for (let i = index; i < word.length; i++) {
            let char = word[i]
            if(!(char in cur.children)){
                cur.children[char] = new Trie()
            }
            cur = cur.children[char]
        }
        cur.end = true
    }

    search(word){
        let cur = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if(!(char in cur.children)){
                return false
            }
            cur = cur.children[char]
        }
        return true
    }
}

let ptrie = new Prefix()
ptrie.insert('name')
console.log(ptrie.search('na'))

let strie = new Sufix()
strie.insert('apple')
console.log(strie.search('le'))