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

//nodes can be their own class.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//inside your LinkedList, you can do 
// const newNode = new Node(value)
//anywhere you want to do something with a node.

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null // because the linked list starts out with only one value.
        }
        this.tail = this.head //because this linked list only has one value in it.
        this.length = 1; // starts out at one
    }

    printList() {
        const array = [];
        let currentNode = this.head //first item..
        while (currentNode !== null) { //as long as there is a current node, and we're not pointing to null...
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    append(value) {
        const newNode = new Node(value)

        this.tail.next = newNode; //setup - adding to the end of the linked list... 
        this.tail = newNode // execution - because we are running this after the line before, we can now update the tail to be the new node.
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value)

        newNode.next = this.head //setup - our new node is going to be the new head.
        this.head = newNode // execution now we update the current data reference to equal this new node.
        this.length++

        return this
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head
        while (counter !== index) {//keep traversing from the head until counter doesn't equal the index. aka traverse to index.
            currentNode = currentNode.next; //moving the current node to the right...
            counter++;
        }
        return currentNode; // gives you the node at the index.
    }
 
    insert(index, value) {
        // 1 - check your parameters

        if (index >= this.length) { //if you're trying to enter something beyond the bounds of the length, just add it to the end.
            return this.append(value)
        }


        const newNode = new Node(value)

        //get the item BEFORE the index we want to insert at
        const leader = this.traverseToIndex(index - 1) // new method, getting the index of the number that goes before the one we're inserting.

        //the item at the actual index, temp holding it basically.
        const holdingPointer = leader.next

        //update leader.next to be the new node
        leader.next = newNode;

        // [... leader -> newNode ... ]
        // holdingPointer (floating around in space)

        //update the node AFTER the new node to be that previous value, held in temp variable.
        newNode.next = holdingPointer;

        // [... leader -> newNode -> holdingPointer ... ]

        this.length++;

        return this.printList()

        // visualize
        // NODE   -    NODE
        //     newNODE 
        // NODE        NODE
        //    \       /
        //     newNode
        // inserting something between the two nodes

        // 1. figure out which node is the first one. traverse the list at index 2 to get its reference
        // 2. callin the first node the "leader"
    }

    remove(index) {
        // check params

        //get the item before the index we want to delete  - we want to point the leader a different node.
        const leader = this.traverseToIndex(index - 1)

        //node we'll be deleting...
        const nodeToDelete = leader.next

        //leader will now point to the node after the node thats being deleted, effectively removing the unwanted node.
        leader.next = nodeToDelete.next

        this.length--
    }

    //common interview question - reverse a linked list!
    reverse() {
        //what if only had 1 item in the list? we don't need to do anything.

        if (!this.head.next) {
            return this.head
        } 
        
        let first = this.head; //reference to head
        this.tail = this.head; // the last node becomes the first node.
        let second = first.next; //reference to node after head

        while (second) { // as long as second exists...
            const temp = second.next //technically third, but it will change so temp is a better name.
            second.next = first;
            first = second;
            second = temp; 
        }

        this.head.next = null
        this.head = first; // by the time loop finishes, first becomes the last item, and second becomes null.
        
        return this.printList();
    }

}

//Reverse loop logic - 
//  1 -> 2 -> 3 -> 4 -> null

// first iteration :
// temp is 3 (the node after second)
// second.next becomes 1 (pointing backward).
// first is updated to 2
// second is updated to temp (3)

// 1 -> 2 <- 3    4 -> null

// second iteration:
// temp is 4 (the node after second)
// second.next becomes 2 (pointing backward).
// first is updated to 3
// second is updated to temp (4)

// 1 -> 2 <- 3 <- 4    null

// third iteration:
// temp is null (the node after second)
// second.next becomes 3 (pointing backward).
// first is updated to 4
// second is updated to temp (null)

// 1 <- 2 <- 3 <- 4    null

// loop complete
// this.head is updated to point to the new head of the list
// tail is also updated

// 4 -> 3 -> 2 -> 1 -> null

const myRealLinkedList = new LinkedList(10) //creates first part of linked list, value: 10
// console.log(myRealLinkedList)

myRealLinkedList.append(5);
myRealLinkedList.append(16);
// console.log(myRealLinkedList)

myRealLinkedList.prepend(1)

myRealLinkedList.printList()

myRealLinkedList.insert(2, 99)

myRealLinkedList.insert(20, 99)

myRealLinkedList.remove(2)


console.log(myRealLinkedList.printList())

console.log(myRealLinkedList.reverse());
