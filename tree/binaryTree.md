## Traversal algorithms

### In-order traversal (p.94)
1. 從左邊的遞迴拜訪左邊的
2. 拜訪左邊的 parent
3. 拜訪右邊的

會發現印出的順序會等於 asc 排序


### Pre-order traversal (p.95)
1. 拜訪 parent node 本身
2. 拜訪左邊的、再右邊的

### Post-order traversal (p.96)
1. 拜訪左邊的葉子、右邊的葉子
2. 左右葉子的 parent 
3. 最後回到 root