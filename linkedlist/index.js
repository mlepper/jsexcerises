// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let count = 0;
    let node = this.head;
    if ( ! node) {
      return count;
    }

    do {
      count++;
      node = node.next;
    } while (node)

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if ( ! node) {
      return this.head;
    }

    while(node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    // assume garbage collection
    this.head = null;
  }

  removeFirst() {
    if ( ! this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if ( ! this.head) {
      return;
    }

    if ( ! this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    if (this.head) {
      this.getLast().next = new Node(data);
    } else {
      this.insertFirst(data);
    }
  }

  getAt(index) {
    let i = 0;
    let node = this.head;
    if ( ! node) {
      return null;
    }

    do {
      if (index === i) {
        return node;
      }
      i++;
      if (node.next) {
        node = node.next;
      } else {
        node = null;
      }
    } while (node)

    return null;
  }

  removeAt(index){
    let node, prev, next;

    if (index === 0) {
       next = this.getAt(1);
       this.removeFirst();
       return;
    }

    prev = this.getAt(index-1);
    next = this.getAt(index+1);

    if ( ! prev) {
      return;
    }

    if ( ! next)  {
      prev.next = null;
    } else {
      prev.next = next;
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }


}

module.exports = { Node, LinkedList };
