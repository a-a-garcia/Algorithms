
class Node {
    constructor(value) {
        this.value = value,
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null,
        this.bottom = null
        this.length = 0
    }

    peek() { //lets you see the top node
        return this.top;
    }

    push(value) { //adds node to top of stack
        const newNode = new Node(value)

        if (this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            let temp = this.top
            this.top = newNode
            this.top.next = temp
        }
        this.length++
    return this
    }

    pop() { //remove from top of the stack
        if (!this.top) {
            return null;
        }
        if (this.length === 1) { //if only one item
            this.bottom = null;
        }
        const temp = this.top; //if we don't need that node anymore, we don't need this line
        this.top = this.top.next
        this.length--;
        return this //return temp if you want that removed node
    }

}

const myStack = new Stack();

//remember its LIFO, last in, first out
console.log(myStack.push('google'))
console.log(myStack.push('udemy'))
console.log(myStack.push('discord'))
console.log(myStack.pop())
console.log(myStack.pop())


