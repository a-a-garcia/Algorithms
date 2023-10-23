class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = new Node(value)

        this.tail = this.head

        this.length = 1
    }

    printList() {
        let linkedListAsArr = []
        let currentNode = this.head
        while (currentNode !== null) {
            linkedListAsArr.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(linkedListAsArr)
    }

    prepend(value) {
        const newNode = new Node(value)

        let temp = this.head
        this.head = newNode
        this.head.next = temp
        this.length++
    }

    append(value) {
        const newNode = new Node(value)

        let temp = this.tail
        this.tail.next = newNode
        this.tail = temp
        this.length++
    }

    traverseToIndex(index) {
        let traversalCounter = 0;
        let currentNode = this.head
        while(traversalCounter !== index) {
            traversalCounter++
            currentNode = currentNode.next
        }
        return currentNode
    }

    insert(value) {

    }
}

const testSinglyLinkedList = new SinglyLinkedList(10)


testSinglyLinkedList.prepend(20)

testSinglyLinkedList.append(30)

console.log(testSinglyLinkedList)

testSinglyLinkedList.printList()

console.log(testSinglyLinkedList.traverseToIndex(1))