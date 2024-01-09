const hashTable = {
    apples : 1000,
    oranges : 2000,
    fruitTotal : function() {
        const fruitValues = Object.keys(this)
        let result = 0;
        for (let i = 0; i < fruitValues.length; i++) {
            if (typeof this[fruitValues[i]] === 'number') {
                result += this[fruitValues[i]]
            }
        }
        return result;
    }
}

console.log(hashTable.fruitTotal())