
class Node {
    constructor(value) {
        this.value = value,
        this.next = null;
    }
}

//much easier to implement with arrays because arrays are quintessentially stacks.

class Stack {
    constructor() {
        this.array = [];
    }

    peek() { //lets you see very latest thing added
        return this.array[this.array.length - 1] // -1 because index starts at 0.
    }

    push(value) { //adds node to top of stack
        this.array.push(value) // easy because arrays have built in .push
        return this
    }

    pop() { //remove from top of the stack
        this.array.pop() // easy because arrays have built in .pop
        return this 
    }

}

const myStack = new Stack();

//remember its LIFO, last in, first out
// console.log(myStack.push('google'))
// console.log(myStack.push('udemy'))
// console.log(myStack.push('discord'))
// console.log(myStack.pop())
// console.log(myStack.pop())


