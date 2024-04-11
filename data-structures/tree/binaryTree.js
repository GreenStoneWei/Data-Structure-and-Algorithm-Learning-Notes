class BinaryNode {
  value = undefined
  left = null
  right = null
  constructor(value) {
    this.value = value
  }

  description() {
    return diagram(this)
  }

  // unbalanced insert
  insert(value) {
    if (!this.value) {
      this.value = value
      return
    }
    _insert(this, value)
  }

  contains(value) {
    return _contains(this, value)
  }
}

function _insert(node, value) {
  if (value < node.left) {
    node.left = _insert(node.left, value)
  } else {
    node.right = _insert(node.right, value)
  }
}

function _contains(node, value) {
  if (node.value === value) {
    return true
  } else {
    if (value < node.left) {
      return _contains(node.left, value)
    } else {
      return _contains(node.right, value)
    }
  }
}

function diagram(node, top = '', root = '', btm = '') {
  if (node) {
    if (node.left === null && node.right === null) {
      return root + `${node.value}\n`
    }
    return diagram(node.right, top + ' ', top + '┌─', top + '| ') + root + `${node.value}\n` + diagram(node.left, btm + '| ', btm + '└─', btm + ' ')
  } else {
    return root + 'nil\n'
  }
}

function example() {
  const zero = new BinaryNode(0)
  const one = new BinaryNode(1)
  const five = new BinaryNode(5)
  const seven = new BinaryNode(7)
  const eight = new BinaryNode(8)
  const nine = new BinaryNode(9)
  seven.left = one
  one.left = zero
  one.right = five
  seven.right = nine
  nine.left = eight

  console.log(seven.description())
}

example()
