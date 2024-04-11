class Stack {
  storage = []

  stackElement() {
    return '---top---\n' + this.storage.reverse().join('\n') + '\n---end---'
  }

  push(element) {
    this.storage.push(element)
    return this.storage
  }

  pop(element) {
    this.storage.pop(element)
    return this.storage
  }

  peek() {
    return this.storage[this.storage.length]
  }

  isEmpty() {
    return !!this.peek()
  }

  init(elements) {
    this.storage = elements
  }
}

function main() {
  const myStack = new Stack()
  myStack.push(1)
  myStack.push(2)
  myStack.push(3)
  myStack.push(4)

  console.log(myStack.stackElement())
}

main()
