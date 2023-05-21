import { BinarySearchTrees } from "./BinarySearchTrees";

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

/*
          9
        /   \
      4       20
    /  \     /  \
  1     6   15   170
*/

export function TreesFunc() {
  console.log("Trees DS Completed!");
  const tree = new BinarySearchTrees();

  tree.insert(9);
  tree.insert(4);
  tree.insert(20);
  tree.insert(1);
  tree.insert(6);
  tree.insert(15);
  tree.insert(170);
  console.log("tree", tree.lookup(6));
  console.log("tree 2", tree.lookup(20));
  // console.log("tree", JSON.stringify(traverse(tree.root)));
}
