const MaxHeap = require('../heap/maxHeap')

function heapSort(array) {
  const maxHeap = new MaxHeap()
  array.forEach((e) => maxHeap.insert(e))
  const result = []
  while (maxHeap.heap.length !== 0) {
    result.unshift(maxHeap.getMax())
    maxHeap.remove()
  }
  return result
}

console.log(heapSort([5, 25, 10, 100, 1, 8, 3]))
