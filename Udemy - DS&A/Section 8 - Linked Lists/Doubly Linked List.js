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
        this.prev = null;
    }
}

//inside your LinkedList, you can do 
// const newNode = new Node(value)
//anywhere you want to do something with a node.

//Doubly Linked List simply means that each node has both 1) a pointer to the next node and 2) a pointer to the previous node. (singly only has a pointer to the next node)

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null, // because the linked list starts out with only one value.
            prev: null,
        }
        this.tail = this.head //because th linked list starts with only one value in it.
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

        newNode.prev = this.tail; //**for doubly
        this.tail.next = newNode; //setup - adding to the end of the linked list... 
        this.tail = newNode // execution - because we are running this after the line before, we can now update the tail to be the new node.
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value)

        newNode.next = this.head //setup - our new node is going to be the new head.
        this.head.prev = newNode //**for doubly
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

        if (index >= this.length) { //if you're trying to enter something beyond the bounds of the length
            return this.append(value)
        }


        const newNode = new Node

        //get the item before the index we want to insert at
        const leader = this.traverseToIndex(index - 1) // new method, getting the index of the number that goes before the one we're inserting.
        
        //FOR DOUBLY..
        // we need to grab the leader AND the follower.
        //if we wanted to add 99 between 10 and 5 [1,10,5,16],
        //we need a reference to 10 - the leader, and 5 - the follower.

        const follower = leader.next // follower will be 5

        //update leader.next to be the new node
        leader.next = newNode; //get the leader to point to the new node.

        // [... leader  -> newNode ...]
        // follower (floating around in space)

        //update the node after the new node to be that previous value, held in temp variable.
        newNode.next = follower; //that is, the 5.

        // [... leader  -> newNode -> follower ...]

        //update 
        newNode.prev = leader // that is, the 10.

         // [... leader  <-> newNode -> follower ...]

        follower.prev = newNode //the 5 will now have a prev value that points to our newNode

        // [... leader  <-> newNode <-> follower ...]

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

        //get the item at the index we want to delete
        const nodeToRemove = this.traverseToIndex(index);

        //update the pointers of the nodes before and after the node being removed
        nodeToRemove.prev.next = nodeToRemove.next;
        nodeToRemove.next.prev = nodeToRemove.prev;

        

        this.length--;
    }
}

const myRealLinkedList = new DoublyLinkedList(10) //creates first part of linked list, value: 10
// console.log(myRealLinkedList)

myRealLinkedList.append(5);
myRealLinkedList.append(16);

myRealLinkedList.prepend(1)


myRealLinkedList.insert(1, 99)
console.log(myRealLinkedList)
myRealLinkedList.printList()

// myRealLinkedList.insert(20, 99)

myRealLinkedList.remove(2)

console.log(myRealLinkedList.printList())
