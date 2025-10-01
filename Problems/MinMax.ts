function findMax(arr: number[]): number {
  let max = arr[0];

  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

function findMin(arr: number[]): number {
  let min = arr[0];

  for (const num of arr) {
    if (num < min) {
      min = num;
    }
  }

  return min;
}

console.log(findMax([1, 4, 233, 2, 34]));
console.log(findMin([1, 4, 233, -1, 34]));
