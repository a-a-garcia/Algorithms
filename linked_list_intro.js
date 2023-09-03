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


//recursive
const linkedListValues = (head) => {
    // todo
    current = head
    if (current === null) {
        return
    }
    console.log(current.val)
    linkedListValues(current.next)
};

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]


