1. 是一個 binary tree
2. Max heap: parent 大於等於 child
3. Min heap: parent 小於等於 child


## Heap application 可以...
1. 找最大最小
2. heap sort
3. 做出 priority queue
4. 用 priority queue 做 graph algorithm (Prim's, Dijkstra's)

## Heap 結構
1. 可以用 array 來表示
2. 每層都要填滿
3. 用 array 表示，left child 的位置在 2i + 1，right child 在 2i + 2
4. child 在 i，parent 位置在 floor(i - 1) / 2

## Operation
### Remove 最大
1. 最大和最後一個交換
2. 最後一個丟掉
3. 比大小，如果 parent 比 child 小，兩個互換。如果比兩個 child 都小，跟大的 child 換。

### insert
1. 插入最後面
2. 與 parent 比，如果比 parent 大，兩者交換

### Remove 指定位置
1. 如果是最後一個，直接移除就可以
2. 不是最後一個的話，跟最後一個換，移掉最後一個
3. sift down and sift up

### Search
1. worst time complexity: O(n)

### Where to go from here?
行為|Time Complexity|
--|--|
remove|O(log n)|
insert|O(log n)|
search|O(n)|
peak|O(1)|
