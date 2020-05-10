# Sorting algorithms in JavaScript (ES5 and ES6)

This repository is part of a series of posts about sorting algorithms reimplemented in JavaScript that I made [on my blog](http://blog.benoitvallon.com).

# About the #sorting-algorithms series

The [#sorting-algorithms series](http://blog.benoitvallon.com/category/sorting-algorithms-in-javascript) is a collection of posts about reimplemented sorting algorithms in JavaScript.

If you are not familiar with sorting algorithms, a quick introduction and the full list of reimplemented sorting algorithms can be found in the [introduction post of the series on sorting algorithms in JavaScript](http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript).

If you feel comfortable with the concept of each sorting algorithms and only want to see the code, have a look at the summary post of the series. It removes all explanations and contains only the [JavaScript code for all sorting algorithms](http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript-all-the-code) discussed in the series.

# The sorting algorithms in the series

- [x] Bubble sort
  
  Bubble sort sometimes referred to as sinking sort,
  is a simple sorting algorithm that repeatedly steps through the list,
  compares adjacent elements and swaps them if they are in the wrong order.
  The pass through the list is repeated until the list is sorted.

  Spec:
  
  - Worst complexity: n^2
  - Average complexity: n^2
  - Best complexity: n
  - Space complexity: 1
  - Method: Exchanging
  - Stable: Yes
  - Class: Comparison sort

  The main advantage of Bubble Sort is the simplicity of the algorithm.
  The space complexity for Bubble Sort is O(1),
  because only a single additional memory space is required i.e. for temp variable.
  Also, the best case time complexity will be O(n), it is when the list is already sorted


  <img src="https://www.studytonight.com/data-structures/images/basic-bubble-sort.png" width="450px" height="350px" />
  
- [x] Selection sort

  Selection sort,
  In computer science, selection sort is an in-place comparison sorting algorithm. 
  It has an O(n²) time complexity, which makes it inefficient on large lists, 
  and generally performs worse than the similar insertion sort.

  Spec:

  - Worst complexity: n^2
  - Average complexity: n^2
  - Best complexity: n^2
  - Space complexity: 1
  - Method: Selection
  - Stable: No
  - Class: Comparison sort

  Selection Sort requires two nested for loops to complete itself, 
  one for loop is in the function selectionSort, 
  and inside the first loop we are making a call to another function indexOfMinimum, which has the second(inner) for loop.

  <img src="https://www.codenuclear.com/wp-content/uploads/2017/08/Selection_Sort.jpg" width="450px" height="350px" />

- [x] Insertion sort

  Insertion sort,
  Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.
  It is much less efficient on large lists than more advanced algorithms such as quick sort, heap sort, or merge sort.

  Spec:

  - Worst complexity: n^2
  - Average complexity: n^2
  - Best complexity: n
  - Space complexity: 1
  - Method: Insertion
  - Stable: Yes
  - Class: Comparison sort

  The main advantage of Bubble Sort is the simplicity of the algorithm.
  The space complexity for Bubble Sort is O(1),
  because only a single additional memory space is required i.e. for temp variable.
  Also, the best case time complexity will be O(n), it is when the list is already sorted

  <img src="https://www.studytonight.com/data-structures/images/basic-insertion-sort.png" width="450px" height="350px" />

- [x] Shellsort

  Shell sort,
  Shell sort, also known as Shell sort or Shell's method, is an in-place comparison sort. 
  It can be seen as either a generalisation of sorting by exchange or sorting by insertion. 
  The method starts by sorting pairs of elements far apart from each other, 
  then progressively reducing the gap between elements to be compared.

  Spec:

  - Inventor: Donald Shell
  - Worst complexity: Depends on gap sequence
  - Average complexity: n*log(n)^2 or n^(3/2)
  - Best complexity: n
  - Space complexity: 1
  - Method: Insertion
  - Stable: No
  - Class: Comparison sort

  Selection Sort requires two nested for loops to complete itself, 
  one for loop is in the function selectionSort, 
  and inside the first loop we are making a call to another function indexOfMinimum, which has the second(inner) for loop.

  <img src="https://lh3.googleusercontent.com/proxy/1pQC-7jgNQq20fIF40KeCaoplobErIAKGMu_hbxRNYDXTFkV-nW0ihOmvcMXfm9KaC8ZiK0cgyYEJd8aLxcRI-n42y53Rjc" width="450px" height="350px" />

- [x] Merge sort

  Merge sort, In computer science, merge sort is an efficient, general-purpose, comparison-based sorting algorithm.
  Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. 
  Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.

  Spec:

  - Worst complexity: n*log(n)
  - Average complexity: n*log(n)
  - Best complexity: n*log(n)
  - Space complexity: n
  - Method: Merging
  - Stable: Yes

  Time complexity of Merge Sort is O(n*Log n) in all the 3 cases (worst, average and best) as merge sort always divides the array in two halves and takes linear time to merge two halves.
  It requires equal amount of additional space as the unsorted array. Hence its not at all recommended for searching large unsorted arrays. 
  It is the best Sorting technique used for sorting Linked Lists.

  <img src="https://www.101computing.net/wp/wp-content/uploads/Merge-Sort-Algorithm.png" width="450px" height="350px" />

- [x] Quicksort

  Quick sort is an efficient sorting algorithm. Developed by British computer scientist Tony Hoare in 1959 and published in 1961, it is still a commonly used algorithm for sorting. 
  When implemented well, it can be about two or three times faster than its main competitors, merge sort and heap sort.
  Quick sort is a divide-and-conquer algorithm.
  It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. 
  The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting.

  Spec:

  - Worst complexity: n^2
  - Average complexity: n*log(n)
  - Best complexity: n*log(n)
  - Space complexity: n
  - Method: Partitioning
  - Stable: No
  - Class: Comparison sort

  For an array, in which partitioning leads to unbalanced subarrays, 
  to an extent where on the left side there are no elements,
  with all the elements greater than the pivot, hence on the right side.
  And if keep on getting unbalanced subarrays, then the running time is the worst case, which is O(n2)
  Where as if partitioning leads to almost equal subarrays, then the running time is the best, with time complexity as O(n*log n).

  <img src="https://chercher.tech/images/kotlin/quick-sort-kotlin-algorithm.png" width="450px" height="350px" />

- [x] Heap sort

   Heap sort,In computer science, heapsort is a comparison-based sorting algorithm. 
   Heapsort can be thought of as an improved selection sort: like selection sort, 
   heapsort divides its input into a sorted and an unsorted region, 
   and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region.
   Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; 
   rather, heap sort maintains the unsorted region in a heap data structure to more quickly find the largest element in each step.
   Although somewhat slower in practice on most machines than a well-implemented quicksort, 
   it has the advantage of a more favorable worst-case O(n log n) runtime. Heapsort is an in-place algorithm, 
   but it is not a stable sort.

   Spec:

   - Inventor: J. W. J. Williams
   - Worst complexity: n*log(n)
   - Average complexity: n*log(n)
   - Best complexity: n*log(n)
   - Space complexity: 1
   - Method: Selection
   - Stable: No

   Heap sort is not a Stable sort, and requires a constant space for sorting a list.
   Heap Sort is very fast and is widely used for sorting.

  <img src="https://miro.medium.com/max/3328/1*KBafG8K6xaO7cY8O30XHdQ.jpeg" width="450px" height="350px" />

# A good way to compare all of them

Unlike the [data structures](http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/), all [sorting algorithms](http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript) have the same goal and they can all take the same input data. So, for every sorting algorithms of the series, we are going sort an `array` of 10 numbers from 1 to 10.

By doing so we will be able to compare the different sorting algorithms more easily. Sorting algorithms are very sensitive to the input data so we will also try different input data to see how they affect the performances.
