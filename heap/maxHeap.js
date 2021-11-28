class MaxHeap {
  constructor() {
    this.heap = []
  }

  getMax() {
    if (!this.heap[0]) return null
    return this.heap[0]
  }

  insert(element) {
    this.heap.push(element)
    this.siftUp(this.heap.length - 1)
  }

  siftDown(fromIndex) {
    let parent = fromIndex
    while (true) {
      let left = this.leftChildIndex(parent)
      let right = this.rightChildIndex(parent)
      let candidate = parent

      if (left < this.heap.length && this.heap[left] > this.heap[candidate]) {
        candidate = left
      }
      if (right < this.heap.length && this.heap[right] > this.heap[candidate]) {
        candidate = right
      }
      if (candidate === parent) {
        return
      }
      ;[this.heap[parent], this.heap[candidate]] = [this.heap[candidate], this.heap[parent]]
      console.log('siftDown', this.heap)
      parent = candidate
    }
  }

  // FIXME:
  siftUp(fromIndex) {
    console.log('siftUp fromIndex', fromIndex)
    let child = fromIndex
    let parent = this.parentIndex(child)
    console.log('siftUp child', this.heap[child])
    console.log('siftUp parent', this.heap[parent])
    while (child > 0 && this.heap[child] > this.heap[parent]) {
      console.log('siftUp before', this.heap)
      ;[this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]]
      console.log('siftUp after', this.heap)
      child = parent
      parent = this.parentIndex(child)
    }
  }

  leftChildIndex(index) {
    return 2 * index + 1
  }

  rightChildIndex(index) {
    return 2 * index + 2
  }

  parentIndex(index) {
    return Math.floor(index - 1 / 2)
  }

  removeByIndex(index) {
    if (index > this.heap.length) {
      return null
    }

    if (index === this.heap.length - 1) {
      this.heap.pop()
      return this.heap
    } else {
      ;[this.heap[index], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[index]]
      this.heap.pop()
      console.log('removeByIndex after pop', this.heap)
      this.siftDown(index)
      this.siftUp(index)
      return this.heap
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return null
    }
    ;[this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]
    this.heap.pop()
    this.siftDown(0)
    return this.heaps
  }
}

async function main() {
  const heap = new MaxHeap()
  const array = [
    239, 198, 980, 404, 413, 804, 912, 546, 849, 506, 917, 837, 210, 837, 917, 6, 723, 929, 506, 438, 267, 225, 533, 312, 568, 596, 82, 685, 138, 276
  ]
  array.forEach((e) => heap.insert(e))
  // heap.insert(1)
  // heap.insert(2)
  // heap.insert(3)
  // heap.insert(4)
  // heap.insert(10)
  // heap.insert(6)
  console.log(heap.heap)
  heap.removeByIndex(0)
  console.log(heap.heap)
}

main()

module.exports = MaxHeap
