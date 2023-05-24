export function sortingFunc() {
  console.log("Sorting algorithm is completed till merge sort!");

  // console.log("bubble sort", bubbleSort(numbers));
  // console.log("selection sort", selectionSort(numbers));
  // console.log("insertion sort", insertionSort(numbers));
  // console.log("merge sort", mergeSort(numbers));
}

function swap(arr, i, j) {
  // old techniq
  //   const temp = arr[i];
  //   arr[i] = arr[j];
  //   arr[j] = temp;

  //   updated tec.
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// bubble sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]; // [7, 88, 41, 5, 2, 77, 6, 10];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      // -i operation reduces iteration done by parent loop
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swapping array shortcut
      }
    }
  }
  return arr;
}

// selection sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[swapIdx]) {
        swapIdx = j;
      }
    }

    // swapping array values
    swap(arr, i, swapIdx);
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      // move the number to the first position
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      // find the right place the num should go
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          // move the number to the right spot
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
    return arr;
  }
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  // split array in into right and left

  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  // console.log({ left, right });

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const res = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      res.push(left[leftIndex]);
      leftIndex++;
    } else {
      res.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    res.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    res.push(right[rightIndex]);
    rightIndex++;
  }
  // return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  return res;
}
