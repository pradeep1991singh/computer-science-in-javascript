/******************************************************
** Insertion sort,
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
******************************************************/

// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
