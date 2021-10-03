class QueueStack {
  // 從右邊進入，放到左邊，從左邊的最後一個開始拿
  leftStack = []
  rightStack = []

  isEmpty() {
    return this.leftStack.length === 0 && this.rightStack.length === 0
  }

  peek() {
    return this.leftStack.length !== 0 ? this.leftStack[this.leftStack.length] : this.rightStack[0]
  }

  enqueue(element) {
    this.rightStack.push(element)
    return true
  }

  dequeue() {
    if (this.leftStack.length === 0) {
      this.leftStack = this.rightStack.reverse()
      this.rightStack.length = 0 // flush all
    }
    return this.leftStack.shift()
  }
}
