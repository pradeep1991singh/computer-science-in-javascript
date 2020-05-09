/******************************************************
** Same Bubble sort just need to count number of time loop is running
** sometimes referred to as sinking sort,
** is a simple sorting algorithm that repeatedly steps through the list,
** compares adjacent elements and swaps them if they are in the wrong order.
** The pass through the list is repeated until the list is sorted.
**
** Spec:
** Worst complexity: n^2
** Average complexity: n^2
** Best complexity: n
** Space complexity: 1
** Method: Exchanging
** Stable: Yes
** Class: Comparison sort
**
** The main advantage of Bubble Sort is the simplicity of the algorithm.
** The space complexity for Bubble Sort is O(1),
** because only a single additional memory space is required i.e. for temp variable.
** Also, the best case time complexity will be O(n), it is when the list is already sorted
******************************************************/

// sample of arrays to sort
var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// be careful: this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
function bubbleSortBasic(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  for(var i = 0; i < array.length; i++) {
    countOuter++;
    for(var j = 1; j < array.length; j++) {
      countInner++;
      if(array[j - 1] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
      }
    }
  }

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

bubbleSortBasic(arrayRandom.slice()); // => outer: 10 inner: 90 swap: 21
bubbleSortBasic(arrayOrdered.slice()); // => outer: 10 inner: 90 swap: 0
bubbleSortBasic(arrayReversed.slice()); // => outer: 10 inner: 90 swap: 45

// correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
function bubbleSort(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  var swapped;
  do {
    countOuter++;
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      countInner++;
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++;
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

bubbleSort(arrayRandom.slice()); // => outer: 9 inner: 90 swap: 21
bubbleSort(arrayOrdered.slice()); // => outer: 1 inner: 10 swap: 0
bubbleSort(arrayReversed.slice()); // => outer: 10 inner: 100 swap: 45
