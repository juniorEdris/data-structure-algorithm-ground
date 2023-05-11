import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { HashTableFunc } from "./dataStructures/HashTables";
import { LinkedListFunc } from "./dataStructures/LinkedList";
import { StacksAndQueuesFunc } from "./dataStructures/StacksAndQueue";

// <a href="https://vitejs.dev" target="_blank">
//   <img src="${viteLogo}" class="logo" alt="Vite logo" />
// </a>
// <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//   <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
// </a>

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Data Structure/Algorithm Practices!</h1>
    <p class="read-the-docs">
      Stay focused to learn more (Check console for results)
    </p>
  </div>
`;

HashTableFunc();
LinkedListFunc();
StacksAndQueuesFunc();
