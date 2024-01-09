class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) { //side note - the underscore, _ is developer talk for "this is a private property"
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        console.log(this._hash(key))
        if (!this.data[this._hash(key)]) {
            const hashedKeyIndex = this._hash(key)
            this.data[hashedKeyIndex] = value;
        } else {
            console.log("collision occured!");
        }
    }

    get(key) {
        const hashedKeyIndex = this._hash(key)
        return this.data[hashedKeyIndex]
    }
}

const myHashTable = new HashTable(5);
myHashTable.set('grapes', 10000);
myHashTable.set('melons', 
5000)

console.log(myHashTable.get('grapes'))
console.log((myHashTable.get('melons')))
console.log(myHashTable.data);