// https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65

class MinHeap {
  constructor() {
    this.heap = [null]
  }

  getMin() {
    return this.heap[1]
  }

  insert(node) {
    this.heap.push(node)
    if (this.heap.length > 1) {
      let current = this.heap.length - 1

      while (current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]) {
        // swap two element
        ;[this.heap[Math.floor(current / 2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current / 2)]]
        current = this.heap[Math.floor(current / 2)]
      }
    }
  }

  remove() {
    let smallest = this.heap[1]

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1] // take the last to the first
      this.heap.splice(this.heap.length - 1) // drop the last

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          // only two elements, just swap
          ;[this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
        }
        return smallest
      }

      let currentIndex = 1
      let leftChildIndex = currentIndex * 2
      let rightChildIndex = currentIndex * 2 + 1

      while (
        this.heap[leftChildIndex] &&
        this.heap[rightChildIndex] &&
        (this.heap[currentIndex] > this.heap[leftChildIndex] || this.heap[currentIndex] > this.heap[rightChildIndex])
      ) {
        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          // swap and use left as current
          ;[this.heap[currentIndex], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[currentIndex]]
          currentIndex = leftChildIndex
        } else {
          ;[this.heap[currentIndex], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[currentIndex]]
          currentIndex = rightChildIndex
        }
        leftChildIndex = currentIndex * 2
        rightChildIndex = currentIndex * 2 + 1
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1)
    } else {
      return null
    }
    return smallest
  }
}
