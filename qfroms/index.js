// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack = new Stack();
    this.reorderStack = new Stack();
  }

  add(val) {
    this.stack.push(val);
  }

  remove() {
    while(this.stack.peek()) {
      this.reorderStack.push(this.stack.pop());
    }

    const ret = this.reorderStack.pop();

    while(this.reorderStack.peek()) {
      this.stack.push(this.reorderStack.pop());
    }

    return ret;
  }

  peek() {
    while(this.stack.peek()) {
      this.reorderStack.push(this.stack.pop());
    }

    const ret = this.reorderStack.peek();

    while(this.reorderStack.peek()) {
      this.stack.push(this.reorderStack.pop());
    }

    return ret;
  }
}

module.exports = Queue;
