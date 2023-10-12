// 10 -> 5 -> 16

// visualizing

// let myLinkedList = {
//     head: { // a node
//         value: 10, //can be anything we want
//         next: { // pointer to the next node
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

//3 crucial parts to a linked list - head, tail and length!
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null // because the linked list starts out with only one value.
        }
        this.tail = this.head //because this linked list only has one value in it.
        this.length = 1; // starts out at one
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode; //setup - adding to the end of the linked list... 
        this.tail = newNode // execution - because we are running this after the line before, we can now update the tail to be the new node.
        this.length++
        return this
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }

        newNode.next = this.head //setup - our new node is going to be the new head.
        this.head = newNode // execution now we update the current data reference to equal this new node.
        this.length++

        return this
    }
}

const myRealLinkedList = new LinkedList(10) //creates first part of linked list, value: 10
// console.log(myRealLinkedList)

myRealLinkedList.append(5);
// console.log(myRealLinkedList)
myRealLinkedList.append(16);

myRealLinkedList.prepend(1)
console.log(myRealLinkedList)