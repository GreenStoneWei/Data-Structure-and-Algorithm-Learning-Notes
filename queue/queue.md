## Feature
- First in first out
- 實作的四種方法
  - array
  - doubly linked list
  - ring buffer
  - two stack

### Array based queue

- 當 queue 的長度不夠的時候，必須要 reallocate 更多空間， resizing 是 O(n) 操作
- dequeue 也是 O(n) 操作，第一個移出之後，後面的都要依序往前遞補，當 queue 很大的時候會變成缺點，可以用 doubly linked list


行為|Best Case|Worst Case|
--|--|--|
enqueue|O(1)|O(1)|
dequeue|O(n)|O(n)|
space complexity|O(n)|O(n)


### Doubly linked list 

- 每一個 element 都要額外存前後 node 的資訊

行為|Best Case|Worst Case|
--|--|--|
enqueue|O(1)|O(1)|
dequeue|O(1)|O(1)|
space complexity|O(n)|O(n)


### Ring buffer 

- 也叫做 circular buffer，是大小固定的 array
- Read pointer 紀錄 queue 的最前面
- Write pointer 紀錄下一個可以用的位置
- 當一個元素進入 queue 後，write pointer 加一
- Read pointer 往後走之後，當空間滿了，write pointer 可以回到初始位置覆蓋掉第一個元素

> ### Question

當 write 抵達最後，但都沒有 dequeue 的時候怎麼辦？
-> 有人實作 evicted callback
https://github.com/janogonzalez/ringbufferjs/blob/master/index.js

 - p.71 The ring buffer has a fixed size which means that enqueue can fail.


行為|Best Case|Worst Case|
--|--|--|
enqueue|O(1)|O(1)|
dequeue|O(1)|O(1)|
space complexity|O(n)|O(n)


## QueueStack

行為|Best Case|Worst Case|
--|--|--|
enqueue|O(1)|O(1)|
dequeue|O(1)|O(1)|
space complexity|O(n)|O(n)

- 與 RingBuffer 相比，dequeue 也可接近 O(1)，且長度不必固定
- 與 linkedList 相比，空間使用有優勢，因為 array 使用相鄰的記憶體。也因此大量的元素被讀取的時候，可以在第一次存取時就被 cache 住（ iOS 課本，不確定 node 執行環境）（a linked list where the elements aren’t in contiguous blocks of memory）

---

# Priority Queue
## Implementation
1. Sorted array
2. Balanced binary tree
  - useful in creating a double-ended priority queue
  - search and insertion: O(log n)
3. Heap
  - a natural choice
  - all O(log n) operation
  - remove max/min: O(1)