export function DynamicPrograms() {
  console.log("Dynamic Programming is completed!");
  //   const memoFunc = foo();
  //   console.log(memoFunc(10));
  //   const fib = fibonacciMaster();
  //   console.log(fib(10));
  //   console.log(fibonacciMaster2(10));
}

function foo() {
  const cachedData = {};
  return (n) => {
    if (cachedData[n]) {
      return cachedData[n];
    } else {
      cachedData[n] = n + 5;
      return cachedData[n];
    }
  };
}
let counter = 0;
function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

function fibonacciMaster() {
  // cached fibonacci
  let cache = {};
  return function fib(n) {
    counter++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 2) + fib(n - 1);
        return cache[n];
      }
    }
  };
}

function fibonacciMaster2(n) {
  let ans = [0, 1];

  for (let i = 2; i < n; i++) {
    ans.push(ans[i - 2] + ans[i - 1]);
  }
  return ans.pop();
}
