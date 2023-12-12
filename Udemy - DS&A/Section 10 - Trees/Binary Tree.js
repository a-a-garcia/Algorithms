// A type of tree with a few straightforward rules:

// 1) Each node can only have either 0, 1, or 2 children.
// 2) Each child can only have one parent.

function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
