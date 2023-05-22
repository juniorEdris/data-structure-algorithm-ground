export function findFactorialRecursive(number) {
  if (number === 2) {
    return number;
  }

  return number * findFactorialRecursive(number - 1);
}

export function findFactorialIterative(number) {
  let answer = 1;

  for (let i = 2; i <= number; i++) {
    answer *= i;
  }

  return answer;
}
