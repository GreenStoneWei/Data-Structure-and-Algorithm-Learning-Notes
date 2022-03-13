/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function (n, edges, start, end) {
  let uF = new UnionFind(n)

  for (let [u, v] of edges) {
    uF.union(u, v)
  }

  return uF.isConnected(start, end)
}

class UnionFind {
  constructor(n) {
    this.root = []
    for (let i = 0; i < n; i++) {
      this.root.push(i)
    }
  }

  find(x) {
    console.log('x', x, 'this.root >>', this.root)
    let a = x

    while (this.root[a] !== a) {
      console.log('a >>', a)
      console.log('this.root[a] >>', this.root[a])
      a = this.root[a]
    }

    this.root[x] = a
    return a
  }

  union(u, v) {
    if (u !== v) {
      let uParent = this.find(u)＝
      let vParent = this.find(v)
      console.log('union uParent', uParent)
      this.root[uParent] = vParent
    }
  }

  isConnected(u, v) {
    return this.find(u) === this.find(v)
  }
}

validPath(
  6,
  [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3]
  ],
  0,
  5
)
