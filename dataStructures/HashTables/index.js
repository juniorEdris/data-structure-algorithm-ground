import { HashTable } from "./hashTable";

export function HashTableFunc() {
  // const myHT = new HashTable(20);
  // console.log(myHT.set("maru", 1500));
  // console.log(myHT.set("rizia", 144));
  // console.log(myHT.get("rizia"));
  // console.log(myHT.keys());
  // console.log(returnFirstAccurNum(arr1));
  console.log("Hashtable Completed!");
}

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];

function returnFirstAccurNum(arr) {
  let hashObj = {};
  for (let i = 0; i < arr1.length; i++) {
    let element = arr1[i];

    if (hashObj[element]) {
      return element;
    } else {
      hashObj[element] = hashObj[element] + 1 || 1;
    }
  }
  return null;
}
