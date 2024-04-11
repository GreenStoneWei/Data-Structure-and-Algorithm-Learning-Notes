function node(value, next, prev) {
  this.value = value
  this.next = next
  this.prev = prev
}

class LinkedList {
  constructor() {}
  head = null
  tail = null

  isEmpty() {
    return this.head === null
  }

  // 在 head 加入一個 node
  unshift(value) {
    if (!this.head) {
      this.head = new node(value, null, null)
    }
    if (!this.tail) {
      this.tail = this.head
    }

    const newHead = new node(value, this.head, null)
    this.head.prev = newHead
  }

  // 在 tail 加入一個 node
  push(value) {
    if (this.isEmpty()) {
      this.unshift(value)
      return
    }
    const tailNode = new node(value, null, this.tail)
    this.tail.next = tailNode
    this.tail = this.tail.next
  }

  getNodeByIndex(index) {
    let currentNode = this.head
    let currentIndex = 0

    while (currentNode && currentIndex < index) {
      currentNode = currentNode.next
      currentIndex += 1
    }
    return currentNode
  }

  insertAfter(index, value) {
    // 先找到要插入位置的 node
    const nodeAtIndex = this.getNodeByIndex(index)
    nodeAtIndex.next = new node(value, nodeAtIndex.next)
  }

  removeFirst() {
    this.head = this.head.next ? this.head.next : null
    this.head.prev = null
  }

  removeLast() {
    if (!this.head) {
      return
    }
    if (!this.head.next) {
      this.removeFirst()
      return
    }

    let prev = this.head
    let current = this.head

    while (current.next) {
      prev = current
      current = current.next
    }
    prev.next = null
    this.tail = prev
  }

  removeAfter(index) {
    const targetNode = this.getNodeByIndex(index)
    if (!targetNode.next) {
      return
    }
    targetNode.next = targetNode.next.next ? targetNode.next.next : null
  }

  queue(value) {
    this.push(value)
    return true
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.removeFirst()
    } else {
      return null
    }
  }
}

function main2() {
  const linkedList = new LinkedList()
  linkedList.push(3)
  linkedList.push(2)
  linkedList.push(1)
  linkedList.insertAfter(1, -1)
  linkedList.removeAfter(0)
}

main2()
