class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor(value) {
    this.head = {
      prev: null,
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
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = this._createNode(value);
    node.next = this.head;
    this.head.prev = node;
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
    let follower = leader.next;
    follower.prev = node;
    node.prev = leader;
    node.next = follower;
    leader.next = node;
    this.length++;
    return this;
  }

  remove(index) {
    // chack params 1 => 10 => 45
    let leader = this.traverseToIndexPoint(index - 1); // 1
    let unwantedPoint = leader.next; // 10
    let rightNode = unwantedPoint.next; // 45
    rightNode.prev = leader; // 45's prev 1
    leader.next = rightNode; // 1's next 45
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
