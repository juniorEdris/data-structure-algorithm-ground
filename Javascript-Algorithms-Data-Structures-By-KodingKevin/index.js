/**
 * Javascript Algorithms + Data Structures By KodingKevin
 * https://www.youtube.com/playlist?list=PLn2ipk-jqgZiAHiA70hOxAj8RMUeqYNK3
 *
 *
 *
 */

//  Max Character Count

const text2 = "aaaaaaaaaaaaaaaAbbbbbbbbbbeeeey";

function charCountFunc(string) {
  string = string.toLowerCase();
  let charCountObj = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    charCountObj[char] = charCountObj[char] + 1 || 1;

    if (charCountObj[char] && charCountObj[char] > maxCount) {
      maxChar = char;
      maxCount = charCountObj[char];
    }
  }
  console.log({ charCountObj, maxChar, maxCount });
}

charCountFunc(text2);

// chunk([4,7,6,71,7,5,98],4)

function createChunk(arr, size) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const last = res[res.length - 1];

    if (!last || last.length === size) {
      res.push([item]);
    } else {
      last.push(item);
    }
  }

  console.log(res);
}

createChunk([4, 7, 6, 71, 7, 5, 98], 2);

// Anagrams "heart" === "earth" -> true || 'lol' === 'lolz' -> false

let textA = "Hello!";
let textB = "Hello!";

function anagrams(stringA, stringB) {
  // Sanitize Alphabets
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  // solution 1 starts
  if (stringA.length !== stringB.length) {
    return false;
  }

  let charCountObj = {};

  for (let i = 0; i < stringA.length; i++) {
    const char = stringA[i];

    charCountObj[char] = charCountObj[char] + 1 || 1;
  }

  for (let i = 0; i < stringB.length; i++) {
    if (!charCountObj[stringB[i]]) {
      return false;
    } else {
      charCountObj[stringB[i]]--;
    }
  }
  return true;
  // solution 1 ends

  // solution 2 starts (check the alphabet sorting is matched)
  // const res =
  //   stringA.split("").sort().join("") === stringB.split("").sort().join("");
  // return res;
  // solution 2 ends
}

console.log(anagrams("hello", "hello"));

// caesarCipher("abcd", 3) > defg
const text = "abcd!";

function caesarCipher(str, shift) {
  const alphab = "abcdefghijklmnopqrstuvwxyz".split("");
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idx = alphab.indexOf(char);

    if (idx === -1) {
      res += char;
      console.log({ char });
      continue;
    }

    const shiftIdx = (idx + shift) % 26;
    res += alphab[shiftIdx];

    // console.log({char, idx, shiftIdx, res});
  }
  return res;
}
console.log(caesarCipher(text, 45));

// steps(4)
// result
// '#   '
// "##  "
// '### '
// '####'

function steps(n) {
  // Solution 1
  for (let i = 1; i <= n; i++) {
    let step = "";

    for (let hash = i; hash > 0; hash--) {
      step += "#";
    }

    for (let space = n - i; space > 0; space--) {
      step += " ";
    }

    // Solution 2 using repeat();

    //     step += "#".repeat(i);
    //     step += " ".repeat(n - i);
    //     console.log({step})
    return step;
  }
}
console.log(steps(2));

// pyramid(3)
// result
// '   #   '
// '  ###  '
// ' ##### '

function pyramid(n) {
  // Solution using repeat();
  for (let i = 1; i <= n; i++) {
    const space = " ".repeat(n - i);
    const hash = "#".repeat(i * 2 - 1);
    console.log(space + hash + space);
  }
}
pyramid(3);

// find indexes
function findIndexes(arr, values) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (arr[i] === values[j]) {
        res.push([values[j], i]);
      }
    }
  }
  return res;
}
console.log(findIndexes([7, 89, 77, 45, 6, 54, 12], [6, 12, 89]));

// Binary Search([1,2,3,4,5,6,7,8,9],7)

function binarySearch(sortedArr, value) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midPoint = sortedArr[mid];

    if (midPoint === value) {
      return midPoint;
    } else if (midPoint < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 17));

// Bubble sort (large number to last/right)

// Swap helper function
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      // -i to make fewer iterations
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([7, 88, 41, 5, 2, 77, 6, 10]));

// small number to first/left
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[swapIdx]) {
        swapIdx = j;
      }
    }
    swap(arr, i, swapIdx);
  }
  return arr;
}

// console.log(selectionSort([7,88,41,5,2,77,6,10]))

// // merge sort

function mergeSort(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let res = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      res.push(arr1[p1]);
      p1++;
    } else {
      res.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    res.push(arr1[p1]);
    p1++;
  }

  while (p2 < arr2.length) {
    res.push(arr2[p2]);
    p2++;
  }

  return res;
}

console.log(mergeSort([1, 9], [2, 3, 4, 5, 6, 7]));

// reverse Str method

function reverse(str) {
  // let res = ''
  // for(let i = 0; i < str.length; i++){
  //   const char = str[i];

  //   res = char + res;
  // }
  // return res;

  return str.split("").reduce((init, val) => val + init, "");
}

//  Madam === Madam > true
//  love  === evol  > false
function palindrome(str) {
  str = str.toLowerCase();
  return reverse(str) === str;
}

// Reverse Int Method

function reverseInt(num) {
  num = num.toString();
  let reversed = reverse(num); // .toString().split('').reverse().join('')

  reversed = parseInt(reversed);

  if (num < 0) {
    reversed = reversed * -1;
  }
  return reversed;
}

function maxChar(str) {
  let charObj = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    charObj[char] = charObj[char] + 1 || 1;

    if (charObj[char] > maxCount) {
      maxChar = char;
      maxCount = charObj[char];
    }
  }

  return { maxChar, maxCount };
}

function fizbuzz(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fiz");
    } else {
      console.log(i);
    }
  }
}

function capitalize(str) {
  let arrOfWords = str.split(" ");
  let result = [];

  for (let i = 0; i < arrOfWords.length; i++) {
    let word = arrOfWords[i];
    result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  return result.join(" ");
}

console.log(capitalize("i love cats"));

function chunk(arr, size) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let last = res[res.length - 1];

    if (!last || last.length === size) {
      res.push([num]);
    } else {
      last.push(num);
    }
  }
  console.log(res);
}

chunk([4, 7, 6, 71, 7, 5, 98], 2);

// function getLastItem(){
//   return this.arr ? this.arr[this.arr - 1] : -1
// }

// console.log([5,4,7,8,5,6,4,1].getLastItem());

//  vowels('aeiou') => 5
//  vowels('agirk') => 2
function vowel(str) {
  str.toLowerCase();

  const vowels = "aeiou".split("");
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    for (let j = 0; j < vowels.length; j++) {
      const vwl = vowels[j];

      if (char === vwl) {
        count++;
      }
    }
  }
  return count;
}

console.log(vowel("agirk"));

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

console.log(returnFirstAccurNum(arr1));
