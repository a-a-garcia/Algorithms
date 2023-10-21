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
        let linkedListAsArr = []
        let currentNode = this.head
        while (currentNode !== null) {
            linkedListAsArr.push(currentNode.value)
            currentNode = currentNode.next
        }
        return linkedListAsArr
    }

    prepend(value) {
        const newNode = new Node(value)

        let temp = this.head
        this.head = newNode
        this.head.next = temp

        this.length++

        return this //allows chaining
    }

    append(value) {
        const newNode = new Node(value)

        let temp = this.tail
        this.tail.next = newNode
        this.tail = temp

        this.length++

        return this
    }

    traverseToIndex(index) { //helper func that allows you to grab a single node from inside the linked list. assists with insert, delete...
        let counter = 0
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }

        const newNode = new Node(value)

        const leader = this.traverseToIndex(index - 1) //grab the node thats 1 BEFORE the index where you want to insert.

        const temp = leader.next // store the leader's original next node in memory

        leader.next = newNode // add the new node to the linked list, after the leader

        newNode.next = temp // with the new node in the list now, make the new node's next node be the node in memory.

        this.length++

        return this
    }

    delete(index) {
        const leader = this.traverseToIndex(index - 1) //again, grab the node thats 1 BEFORE the index you want to delete.
        
        const nodeToDelete = leader.next // store the location of the node you want to delete..

        leader.next = nodeToDelete.next // this is where the actual deleting gets done, the leader's next becomes the nodeToDelete's next. because nodeToDelete is equal to leader.next, they just become equal to each other, "cutting out" or "forgetting" the node that was there originally.

        this.length--

        return this
    }
}

const testSinglyLinkedList = new SinglyLinkedList(10)

testSinglyLinkedList.prepend(2)

testSinglyLinkedList.append(14)

testSinglyLinkedList.insert(1, 219)

testSinglyLinkedList.delete(2)

console.log(testSinglyLinkedList.printList())

console.log(testSinglyLinkedList)   

