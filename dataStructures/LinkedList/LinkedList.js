class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  _createNode(value) {
    return new Node(value);
  }

  append(value) {
    const node = this._createNode(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = this._createNode(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    }
    let node = this._createNode(value);
    let leader = this.traverseToIndexPoint(index - 1);
    let holdingPoint = leader.next;
    node.next = holdingPoint;
    leader.next = node;
    this.length++;
    return this;
  }

  remove(index) {
    // chack params
    let leader = this.traverseToIndexPoint(index - 1);
    let unwantedPoint = leader.next;
    leader.next = unwantedPoint.next;
    this.length--;
    return this;
  }

  traverseToIndexPoint(index) {
    let counter = 0;
    let currentNode = this.head;
    while (index !== counter) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
