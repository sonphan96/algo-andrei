// [1, 2, 3, 4, 5]
// []

class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val) {
    // O(1)
    this.in.push(val);
  }

  dequeue() {
    // O(n)
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }

  peek() {
    // O(n)
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }

  empty() {
    // O(1)
    return this.in.length === 0 && this.out.length === 0;
  }
}
