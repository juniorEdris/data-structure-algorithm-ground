import { LinkedList } from "./LinkedList";

export function LinkedListFunc() {
  console.log("LinkedList running!");
  //   1 => 10 => 45
  const myLinList = new LinkedList(1);
  myLinList.append(10);
  myLinList.append(45);
  myLinList.prepend(11);
  myLinList.insert(2, 44);
  console.log(myLinList.printList());
  console.log(myLinList.remove(2));
  console.log(myLinList.printList());
}
