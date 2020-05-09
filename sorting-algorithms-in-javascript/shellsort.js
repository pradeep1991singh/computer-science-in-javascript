/******************************************************
** Shell sort,
** Shell sort, also known as Shell sort or Shell's method, is an in-place comparison sort. 
** It can be seen as either a generalisation of sorting by exchange or sorting by insertion. 
** The method starts by sorting pairs of elements far apart from each other, 
** then progressively reducing the gap between elements to be compared.
**
** Spec:
** Inventor: Donald Shell
** Worst complexity: Depends on gap sequence
** Average complexity: n*log(n)^2 or n^(3/2)
** Best complexity: n
** Space complexity: 1
** Method: Insertion
** Stable: No
** Class: Comparison sort
**
** Selection Sort requires two nested for loops to complete itself, 
** one for loop is in the function selectionSort, 
** and inside the first loop we are making a call to another function indexOfMinimum, which has the second(inner) for loop.
******************************************************/

// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// gaps
var gaps = [701, 301, 132, 57, 23, 10, 4, 1];

function shellsort(array) {
  for(var g = 0; g < gaps.length; g++) {
    var gap = gaps[g];
    for(var i = gap; i < array.length; i++) {
      var temp = array[i];
      for(var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
  return array;
}

console.log(shellsort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
