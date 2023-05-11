import { Node } from "./Node";

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      // arif - tanvir - sojol
      //   confused about first and last value reference
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPoint = this.first;
    this.first = holdingPoint.next;
    this.length--;
    return this;
  }
}
