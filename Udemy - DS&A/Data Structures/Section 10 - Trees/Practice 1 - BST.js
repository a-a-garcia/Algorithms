//A BST is going to have Nodes. Nodes will consist of a value and left and right values

class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) { 
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root // this is defined so that we can traverse the tree until we get to a place where we can place the node
            while (true) {
                    if ( value < currentNode.value) {
                        //first need to check if there's something already to the left of the current node
                        if (!currentNode.left) { //if there's nothing to the left...
                            currentNode.left = newNode // then we can place the new node there
                            return this //return to prevent infinite loop
                        } else {
                            currentNode = currentNode.left // if there is already something there, then we need to update the node we're looking at to be that left node. then we loop.
                        }
                    } else if ( value > currentNode.value) {
                        if (!currentNode.right) {
                            currentNode.right = newNode
                            return this
                        } else {
                            currentNode = currentNode.right
                    }
                }
            }
        }
    }

    lookup(value) {
        if (this.root === null) {
            return false
        } else {
            let currentNode = this.root;
            while (currentNode) {
                if (value < currentNode.value) {
                    currentNode = currentNode.left
                } else if (value > currentNode.value) {
                    currentNode = currentNode.right
                } else if (value === currentNode.value) {
                    return currentNode
                }
            }
        }
        return false
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(1)
tree.insert(6)
tree.insert(15)
tree.insert(170)

console.log(tree)
console.log(JSON.stringify(traverse(tree.root)))


function traverse(node) {
    const tree = { value : node.value };
    tree.left = node.left === null ? null :
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right);
    return tree
}