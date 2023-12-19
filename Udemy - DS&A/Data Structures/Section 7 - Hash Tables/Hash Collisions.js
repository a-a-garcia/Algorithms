// Time complexity for Hash tables:
// insert: O(1) (could be O(n) if there are collisions
// lookup: O(1) (could be O(n) if there are collisions))
// delete: O(1)
// search: O(1)

let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhhh!');
    }
}

console.log(user.age) // O(1)

user.spell = 'abra kadabra'; // O(1)
console.log(user)

user.scream(); // O(1)

// you might be thinking, why even use arrays if hash tables are so fast?

// one major downside to hash tables is the concept of hash collisions

// to describe it plainly, hash collisions occur when two keys get mapped to the same location in memory

// when a collision occurs,the time complexity of lookup and insert becomes O(n/k) where k is the size of your hash table (simplified, it's O(n). this increase in time complexity is due to the fact that you have to iterate through the linked list that is created when a collision occurs to find the value you're looking for.

// you can expect collisions to occur in every hash table, so it's rather superfluous to worry about. however, it's good to know so you can talk about it in an interview.

