/******************************************************
** Same as Insertion sort just count the no of time loops run for outer, inner and swap
** Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.
**  It is much less efficient on large lists than more advanced algorithms such as quick sort, heap sort, or merge sort.
**
** Spec:
** Worst complexity: n^2
** Average complexity: n^2
** Best complexity: n
** Space complexity: 1
** Method: Insertion
** Stable: Yes
** Class: Comparison sort
**
** The main advantage of Bubble Sort is the simplicity of the algorithm.
** The space complexity for Bubble Sort is O(1),
** because only a single additional memory space is required i.e. for temp variable.
** Also, the best case time complexity will be O(n), it is when the list is already sorted
******************************************************/

// sample of arrays to sort
const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function insertionSort(array) {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  for(let i = 0; i < array.length; i++) {
    countOuter++;
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      countInner++;
      countSwap++;
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

insertionSort(arrayRandom.slice()); // => outer: 10 inner: 21 swap: 21
insertionSort(arrayOrdered.slice()); // => outer: 10 inner: 0 swap: 0
insertionSort(arrayReversed.slice()); // => outer: 10 inner: 45 swap: 45
