class TreeNode {
  children = []
  constructor(value) {
    this.value = value
  }

  add(node) {
    this.children.push(node)
  }

  // Depth-first traversal
  traverseDepthFirst(callback) {
    _traverseDepthFirst(callback, this)
  }

  // level-order traversal
  traverselevelOrder(callback) {
    _traverselevelOrder(callback, this)
  }
}

function _traverseDepthFirst(callback, node) {
  callback(node.value)
  node.children.forEach((node) => _traverseDepthFirst(callback, node))
}

function _traverselevelOrder(callback, node) {
  callback(node.value)
  const list = []
  node.children.forEach((node) => list.push(node))
  while (list.length !== 0) {
    const currentNode = list.shift()
    callback(currentNode.value)
    currentNode.children.forEach((node) => list.push(node))
  }
}

function example1() {
  const beverage = new TreeNode('Beverages')
  const hot = new TreeNode('Hot')
  const cold = new TreeNode('Cold')
  const tea = new TreeNode('tea')
  const coffee = new TreeNode('coffee')
  const chocolate = new TreeNode('cocoa')
  const blackTea = new TreeNode('black')
  const greenTea = new TreeNode('green')
  const chaiTea = new TreeNode('chai')
  const soda = new TreeNode('soda')
  const milk = new TreeNode('milk')
  const gingerAle = new TreeNode('ginger ale')
  const bitterLemon = new TreeNode('bitter lemon')
  beverage.add(hot)
  beverage.add(cold)
  hot.add(tea)
  hot.add(coffee)
  hot.add(chocolate)
  cold.add(soda)
  cold.add(milk)
  tea.add(blackTea)
  tea.add(greenTea)
  tea.add(chaiTea)
  soda.add(gingerAle)
  soda.add(bitterLemon)

  // beverage.traverseDepthFirst(console.log)
  // beverage.traverselevelOrder(console.log)
  const a = beverage.search('milk')
  console.log(a)
}

example1()
