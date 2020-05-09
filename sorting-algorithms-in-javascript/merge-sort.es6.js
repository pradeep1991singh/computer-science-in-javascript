/******************************************************
** Merge sort,
** In computer science, merge sort is an efficient, general-purpose, comparison-based sorting algorithm.
** Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. 
** Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.
**
** Spec:
** Worst complexity: n*log(n)
** Average complexity: n*log(n)
** Best complexity: n*log(n)
** Space complexity: n
** Method: Merging
** Stable: Yes
**
** Time complexity of Merge Sort is O(n*Log n) in all the 3 cases (worst, average and best) as merge sort always divides the array in two halves and takes linear time to merge two halves.
** It requires equal amount of additional space as the unsorted array. Hence its not at all recommended for searching large unsorted arrays. 
** It is the best Sorting technique used for sorting Linked Lists.
******************************************************/

// array to sort
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// top-down implementation
function mergeSortTopDown(array) {
  if(array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}
function mergeTopDown(left, right) {
  const array = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return array.concat(left.slice()).concat(right.slice());
}

console.log(mergeSortTopDown(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// bottom-up implementation
function mergeSortBottomUp(array) {
  let step = 1;
  while (step < array.length) {
    let left = 0;
    while (left + step < array.length) {
      mergeBottomUp(array, left, step);
      left += step * 2;
    }
    step *= 2;
  }
  return array;
}
function mergeBottomUp(array, left, step) {
  const right = left + step;
  const end = Math.min(left + step * 2 - 1, array.length - 1);
  let leftMoving = left;
  let rightMoving = right;
  const temp = [];

  for (let i = left; i <= end; i++) {
    if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
        leftMoving < right) {
      temp[i] = array[leftMoving];
      leftMoving++;
    } else {
      temp[i] = array[rightMoving];
      rightMoving++;
    }
  }

  for (let j = left; j <= end; j++) {
    array[j] = temp[j];
  }
}

console.log(mergeSortBottomUp(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
