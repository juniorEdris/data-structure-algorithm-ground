import { Node } from "./Node";

export class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    let node = new Node(value);

    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      let holdingPointer = this.top;
      this.top = node;
      node.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = holdingPointer.next;
    this.length--;
    return this;
  }
}
