class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) { //if nothing in our queue
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++  
        return this;
    }

    dequeue() {
        if (!this.first) {// if there's no first item
            return null
        }
        if (this.first === this.last) { // if there's only one person in line.. 
            this.last = null;
        } 
        // const holdingPointer = this.first; if you wanted to keep the person you're removing in memory.
        this.first = this.first.next;
        this.length--;
        return this;
        //return holdingPointer
    }
}

const myQueue = new Queue();
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')
myQueue.peek();
myQueue.dequeue();
console.log(myQueue)

//Note that if you don't hold a pointer to the dequeue'd person, they will be removed from memory.
