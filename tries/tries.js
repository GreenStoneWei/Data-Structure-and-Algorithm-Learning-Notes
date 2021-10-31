class TrieNode {
  key = null
  parent = null
  children = {}
  isTerminating = false
  constructor(key, parent) {
    this.key = key
    this.parent = parent
  }
}

class Tries {
  constructor() {
    this.root = new TrieNode(null, null)
  }

  insert(collection) {
    let current = this.root
    for (const element of collection) {
      if (!current.children[element]) {
        current.children[element] = new TrieNode(element, current)
      }
      current = current.children[element]
    }
    current.isTerminating = true
  }

  contains(collection) {
    let current = this.root

    for (const element of collection) {
      if (current.children[element] === null) {
        return false
      }
      current = current.children[element]
    }
    return current.isTerminating
  }

  remove(collection) {
    let current = this.root

    for (const element of collection) {
      if (!current.children[element]) {
        return
      }
      current = current.children[element]
    }
    if (!current.isTerminating) {
      return
    }
    current.isTerminating = false

    while (current.parent) {
      let parent = current.parent
      if (Object.keys(current.children).length === 0 && !current.isTerminating) {
        parent.children[current.key] = null
      }
      current = parent
    }
  }

  collections(prefix) {
    let current = this.root
    // verifying that the trie contains the prefix
    for (const prefixElement of prefix) {
      if (!current.children[prefixElement]) {
        return []
      }
      current = current.children[prefixElement]
    }

    const _collections = (prefix, afterNode) => {
      const result = [] // create an array to hold the results
      if (afterNode.isTerminating) {
        result.push(prefix)
      }
      for (const child of Object.values(afterNode.children)) {
        let newPrefix = prefix + child.key
        result.push(..._collections(newPrefix, child))
      }
      return result
    }

    return _collections(prefix, current)
  }
}

function example1() {
  const trie = new Tries()
  trie.insert('cute')
  if (trie.contains('cute')) {
    console.log('here')
  }
}

function example2() {
  const trie = new Tries()
  trie.insert('cut')
  trie.insert('cute')

  trie.remove('cut')

  if (trie.contains('cute')) {
    console.log('here')
  }
}

function example3() {
  const trie = new Tries()
  trie.insert('car')
  trie.insert('card')
  trie.insert('care')
  trie.insert('cared')
  trie.insert('cars')
  trie.insert('carbs')
  trie.insert('carapace')
  trie.insert('cargo')

  let prefixedWithCar = trie.collections('car')
  // console.log(, prefixedWithCar) // [ 'car', 'card', 'care', 'cared', 'cars', 'carbs', 'carapace', 'cargo' ]

  let prefixedWithCare = trie.collections('care')
  console.log(prefixedWithCare) // [ 'care', 'cared' ]
}

example3()
