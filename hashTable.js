class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hashKey(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    setValue(key, value) {
        let index = this.hashKey(key)
        let bucket = this.table[key]

        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            let sameKey = bucket.find(item => item[0] == key)
            if (sameKey) {
                sameKey[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        let index = this.hashKey(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameKey = bucket.find(item => item[0] == key)
            if (sameKey) {
                return sameKey[1]
            }
            return undefined
        }
    }

    remove(key) {
        let index = this.hashKey(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameKey = bucket.find(item => item[0] == key)
            if (sameKey) {
                bucket.splice(bucket.indexOf(sameKey), 1)
            }
        }
    }

    dispaly() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(this.table[i])
            }
        }
    }
}

let hash = new HashTable(10)

hash.setValue("name", "john")
hash.setValue("age", 20)
hash.remove("name")
hash.dispaly()