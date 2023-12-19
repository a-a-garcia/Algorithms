class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root; //we're gonna have to traverse this node
            while(true) { //we don't know how long to traverse so we need to use while
                if (value < currentNode.value) { // is value we're entering less than current node value?
                    //LEFT
                    if (!currentNode.left) { //first need to check if there's already an element to the left of the root node 
                        currentNode.left = newNode // if there isnt!
                        return this; //returning the tree
                    }
                    currentNode = currentNode.left //if there IS something to the left, so we can keep looping until we find a place the node
                } else {
                    //RIGHT
                    if (!currentNode.right) { //if there's nothing to the right of the node 
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            } 
        }
    }

    lookup(value) {
        if (!this.root) { //first check if there's even a root node
            return false;
        }
        let currentNode = this.root; //we're using currentNode to traverse the BST return it if the value we're looking for exists.
        while(currentNode) { //stop while loop when currentNode no longer exist or no longer have a node to go through.
            if(value < currentNode.value) {
                currentNode = currentNode.left
            } else if ( value > currentNode.value) {
                currentNode = currentNode.right
            } else if (currentNode.value === value) { // we got a match
                return currentNode
            }
        }
        return false //if we find nothing.
    }

    //most likely won't encounter this in an interview so this is bonus..
    remove(value) {
        if (!this.root) {
            return false
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                //left
                parentNode = currentNode
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                //right
                parentNode = currentNode
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                // We have a match!
                //Option 1: Current node has no right child:
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left
                    } else {
                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                }
                //Option 2: Current node's right child doesn't have a left child..
                else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;

                        //if parent > current, make right child of the left, the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        }

                        //if parent < current, make right child, a right child of the parent.

                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                }
                //Option 3: Current node's right child does have a left child
                else {
                    //find the right child's leftmost child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                } 
            return true
            }
        }
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
tree.remove(170)
console.log(tree.lookup(171))
// console.log(JSON.stringify(traverse(tree.root)))

//the goal
//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value : node.value };
    tree.left = node.left === null ? null :
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right);
    return tree
}


// A note on insert:

// So basically..... if a new node's value is less than the root's value... and if there's nothing to the left, then we set the current node;s (which starts out as the root) left node to be the new node. but if there is something there, then we need to continue looping or "travelling" down the line by updating the currentNode to be the currentNode.left (which again, starts out as the root node's left)
// ChatGPT
// Exactly! You've captured the essence of the logic in the code. The key idea is to traverse the tree downward to find the appropriate spot for inserting the new node while maintaining the binary search tree property. Here's a breakdown of the logic:

// If the new node's value is less than the current node's value, move to the left subtree.

// If there's no node to the left, insert the new node there.
// If there is a node to the left, update the current node to be the left child and continue the process.
// If the new node's value is greater than or equal to the current node's value, move to the right subtree.

// If there's no node to the right, insert the new node there.
// If there is a node to the right, update the current node to be the right child and continue the process.
// This process is repeated until an empty spot is found in the tree, where the new node can be inserted while maintaining the binary search tree property. The while loop ensures that the traversal continues until the appropriate spot is found. This approach makes use of the hierarchical structure of the binary search tree to efficiently insert nodes in their correct positions.

// User
// And the loop knows when to stop when we return this. IE - when we've found a space for that node to go / be sufficiently referenced.
// ChatGPT
// Yes, that's correct! The while (true) loop is essentially an infinite loop that continues until a return statement is reached. The return this; statement is reached when the new node has been successfully inserted into the tree, and the method returns the updated tree.

// The loop keeps iterating until the appropriate spot for the new node is found, and once the insertion is done, it breaks out of the loop by encountering the return this; statement. This ensures that the method exits once the insertion is complete, and the updated tree is returned.

// The use of return this; is a common pattern in such tree manipulation methods to allow for method chaining. It allows you to perform multiple insertions or other operations on the tree in a single statement, like tree.insert(9).insert(4).insert(20).insert(1).insert(6).insert(15).insert(170); in your example. Each insert call modifies the tree and returns the tree itself, allowing you to chain more method calls.