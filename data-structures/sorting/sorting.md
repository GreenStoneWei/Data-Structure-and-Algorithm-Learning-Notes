## These algorithms are space-efficient; they only require constant O(1) additional memory space.


### Bubble sort
1. 一次 iteration 不會全部排完，是令最大值像泡泡一樣，浮到最上面
2. 反覆進行交換，將次大、第三大...依序上浮
3. Best: O(n)
4. Worst: O(n^2)

### Selection sort
1. 減少交換的次數
2. 每次記住最小的值和位置，再找是否有比他小的，有就交換，沒有代表他在對的位置上
3. Best: O(n^2)
4. Worse: O(n^2)

### Insertion sort
1. Best case 如果是已經 sorted 的 array 只需 O(n)
2. Worst case: O(n^2)

### Merge sort
1. Time complexity: Best, worse, average cases are O(nlog n)
2. Space complexity: O(nlog n)
3. divide and conquer

### Radix sort
1. non-comparative algorithm for sorting integers in linear time
2. O(k*n)

### Heap sort
1. O(nlogn) (n for traverse the list, logn for rebuild the heap tree)
2. unstable (eg. sorting a card deck by the rank, the suite may change order)

### Quick sort
1. comparison-based
2. much like merge sort but choosing a pivor and divides the array into three parts as [ elements < pivot | pivot | elements > pivot ]
3. Lomuto’s and Hoare’s don't handle duplicates really well -> Dutch national flag partitioning
4. Best O(n log n), worst (nearly sorted, bad pivot) could perform as O(n^2)

### Discussion
1. Merge sort is preferable over Quicksort when you need stability. Merge sort is stable and guarantees O(n log n). These characteristics are not the case with Quicksort, which isn’t stable and can perform as bad as O(n²).
2. Merge sort works better for larger data structures or data structures where elements are scattered throughout memory. Quicksort works best when elements are stored in a contiguous block.