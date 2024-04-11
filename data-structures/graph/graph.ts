import { EdgeType } from './edgeType'

class Vertex {
  value: string | number
  adjacents = []

  constructor(value: string | number) {
    this.value = value
    this.adjacents = []
  }

  addAdjacent(vertex: Vertex) {
    this.adjacents.push(vertex)
  }

  removeAdjacent(vertex: Vertex) {
    const index = this.adjacents.indexOf(vertex)
    if (index > -1) {
      this.adjacents.splice(index, 1)
      return vertex
    }
  }

  getAdjacents() {
    return this.adjacents
  }

  isAdjacent(vertex: Vertex) {
    return this.adjacents.indexOf(vertex) > -1
  }
}

class Graph {
  vertexes: Map<any, any>
  edgeType: EdgeType
  constructor(edgeType: EdgeType = EdgeType.directed) {
    this.vertexes = new Map()
    this.edgeType = edgeType
  }

  addEdge(source: Vertex, destination: Vertex) {
    const sourceNode = this.addVertex(source)
    const destinationNode = this.addVertex(destination)
    sourceNode.addAdjacent(destinationNode)
    if (this.edgeType === EdgeType.undirected) {
      destinationNode.addAdjacent(sourceNode)
    }
    return [sourceNode, destinationNode]
  }

  addVertex(value) {
    if (this.vertexes.has(value)) {
      return this.vertexes.get(value)
    } else {
      const vertex = new Vertex(value)
      this.vertexes.set(value, vertex)
      return vertex
    }
  }

  removeVertex(value) {
    const current = this.vertexes.get(value)
    if (current) {
      for (const node of this.vertexes.values()) {
        node.removeAdjacent(current)
      }
    }
    return this.vertexes.delete(value)
  }

  removeEdge(source, destination) {
    const sourceNode = this.vertexes.get(source)
    const destinationNode = this.vertexes.get(destination)

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode)

      if (this.edgeType === EdgeType.undirected) {
        destinationNode.removeAdjacent(sourceNode)
      }
    }

    return [sourceNode, destinationNode]
  }
}
