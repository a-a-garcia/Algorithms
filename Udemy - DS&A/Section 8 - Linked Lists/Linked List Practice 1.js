//Let's build a linked list.

//remember, a linked list is comprised of nodes, easily instantiated by a class. Each node will contain a value, and if singly - a .next property, and if doubly, a .next and a .prev property.

//Linked lists are stored randomly in computer memory.

//They are useful for fast inserts, fast deletes. Though they are stored with random addresses in a computer's memory, similar to a hash table, there is an order to them compared to hash tables. They are flexible in size - nodes can easily be added and removed




//start be creating a node class

class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

//Now we start building the linked list.

//A linked list is going to take in a value, for its method and when its instantiated (a linked list must have at least one node.)
//our linked list starts with a head equal to a new node, a tail initially equal to the head, and length of 1.
class SinglyLinkedList {
    constructor(value) {
        this.head = new Node(value)

        this.tail = this.head

        this.length = 1
    }

    //ability to print the contents of the list
    printList() {
        const linkedListAsArr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            linkedListAsArr.push(currentNode.value)
            currentNode = currentNode.next
        }
        return linkedListAsArr
    }
}

const testSinglyLinkedList = new SinglyLinkedList(10)

console.log(testSinglyLinkedList.printList())

console.log(testSinglyLinkedList)