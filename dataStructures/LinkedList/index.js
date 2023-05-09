import { LinkedList } from "./LinkedList";

export function LinkedListFunc() {
  console.log("LinkedList running!");
  //   1 => 10 => 45
  const myLinList = new LinkedList(10);
  myLinList.append(45);
  myLinList.prepend(1);
  myLinList.insert(2, 44);
  console.log(myLinList.remove(2));
  console.log(myLinList.printList());
}
