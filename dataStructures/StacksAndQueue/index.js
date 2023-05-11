import { Stack } from "./Stack";

export function StacksAndQueuesFunc() {
  console.log("Stacks And Queues running!");
  const myStack = new Stack();
  myStack.push("google");
  myStack.push("fiverr");
  myStack.push("facebook");
  console.log(myStack.push("discord"));
  //   console.log(myStack.peek());
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
}
