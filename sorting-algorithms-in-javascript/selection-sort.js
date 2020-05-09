/******************************************************
** Selection sort,
** In computer science, selection sort is an in-place comparison sorting algorithm. 
** It has an O(n²) time complexity, which makes it inefficient on large lists, 
** and generally performs worse than the similar insertion sort.
**
** Spec:
** Worst complexity: n^2
** Average complexity: n^2
** Best complexity: n^2)
** Space complexity: 1
** Method: Selection
** Stable: No
** Class: Comparison sort
**
** Selection Sort requires two nested for loops to complete itself, 
** one for loop is in the function selectionSort, 
** and inside the first loop we are making a call to another function indexOfMinimum, which has the second(inner) for loop.
******************************************************/

/******************************************************
** Selection sort,
** In computer science, selection sort is an in-place comparison sorting algorithm.  ** It has an O(n²) time complexity, which makes it inefficient on large lists, 
** and generally performs worse than the similar insertion sort.
**
** Spec:
** Worst complexity: n^2
** Average complexity: n^2
** Best complexity: n^2)
** Space complexity: 1
** Method: Selection
** Stable: No
** Class: Comparison sort
**
** Selection Sort requires two nested for loops to complete itself, 
** one for loop is in the function selectionSort, 
** and inside the first loop we are making a call to another function indexOfMinimum, which has the second(inner) for loop.
******************************************************/

// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var min = i;
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(array, i, min);
    }
  }
  return array;
}

console.log(selectionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
