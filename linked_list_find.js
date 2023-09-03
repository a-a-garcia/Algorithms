
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d
//iterative solution
const linkedListFind = (head, target) => {
    current = head
    while (current != null) {
        if (current.val === target) {
            return true
        }
        current = current.next
    }
    return false
  };

console.log(linkedListFind(a, "c")); // true