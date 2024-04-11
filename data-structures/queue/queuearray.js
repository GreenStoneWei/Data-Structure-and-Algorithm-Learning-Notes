class QueueArray {
  array = []

  init(elements) {
    this.array = elements
  }

  isEmpty() {
    // O(1)
    return this.array.length === 0
  }

  peek() {
    // O(1)
    return this.array[0]
  }

  enqueue(element) {
    // O(1)
    this.array.push(element)
    return true
  }

  dequeue() {
    return this.isEmpty() ? null : this.array.shift()
  }
}

function main() {}

main()
