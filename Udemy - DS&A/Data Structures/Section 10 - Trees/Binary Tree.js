// A type of tree with a few straightforward rules:

// 1) Each node can only have either 0, 1, or 2 children (nodes).
// 2) Each child can only have one parent.

function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

//Binary trees can be "Perfect" or "Full". 

//A perfect binary tree - all the leaf nodes are full, and theres no node that has only 1 child. a Node either has 0 children or 2 children, and the bottom layer of the tree is completely filled. REALLY EFFICIENT! 
    // Easiest way to visualize - for each level, the # of nodes doubles.
    // The number of nodes in a row should equal all the nodes in the rows above it, plus one. Which means, about half of the nodes/data are in the bottom level.

//For a full tree, a node can have 0 or 2 children, but never 1 child.

//New Time Complexity...
//LOOKUP O(log N)
//INSERT O(log N)
//DELETE O(log N)

