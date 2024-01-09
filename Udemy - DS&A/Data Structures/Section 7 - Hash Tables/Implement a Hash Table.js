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

    //my answer
    // set = (key, value) => {
    //     this.data[this._hash(key)] = [key, value]
    //     console.log("data added successfully")
    // }

    // get = (key) => {
    //     let hashValue = this._hash(key)
    //     return this.data[hashValue]
    // }

    //instructor's answer:
    set(key, value) {
        let address = this._hash(key);

        if (!this.data[address])  {// do this to avoid collisions
            this.data[address] = []
            this.data[address].push([key,value])
        }
        this.data[address].push([key,value])
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(currentBucket)
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return "there's nothing in this bucket";
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                console.log(this.data[i][0][0])
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }

    // KEYS WITHOUT COLLISION
    // keys() {
    //     if (!this.data.length) {
    //       return undefined
    //     }
    //     let result = []
    //     // loop through all the elements
    //     for (let i = 0; i < this.data.length; i++) {
    //         // if it's not an empty memory cell
    //         if (this.data[i] && this.data[i].length) {
    //           // but also loop through all the potential collisions
    //           if (this.data.length > 1) {
    //             for (let j = 0; j < this.data[i].length; j++) {
    //               result.push(this.data[i][j][0])
    //             }
    //           } else {
    //             result.push(this.data[i][0])
    //           } 
    //         }
    //     }
    //     return result; 
    //   }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
myHashTable.set('melons', 
5000)
myHashTable.set('oranges', 2);

(myHashTable.get('grapes'))
(myHashTable.get('melons'))
// console.log(myHashTable.data);