import { Node } from "./Node";

export class BinarySearchTrees {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = node;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = node;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        // left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // right
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }

    return false;
  }
  //   insert(value){}
}
