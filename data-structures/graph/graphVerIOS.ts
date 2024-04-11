import { EdgeType } from './edgeType'

interface Graph<T> {
  createVertex(data: T): Vertex<T>
  addDirectedEdge(source: Vertex<T>, destination: Vertex<T>, weight?: number): void
  addUndirectedEdge(source: Vertex<T>, destination: Vertex<T>, weight?: number): void
  add(edge: EdgeType, source: Vertex<T>, destination: Vertex<T>, weight?: number): void
  edges(source: Vertex<T>): Edge<T>[]
  weight(source: Vertex<T>, destination: Vertex<T>): number
}

class Vertex<T> {
  index: number
  data: T
  constructor(index: number, data: T) {
    this.index = index
    this.data = data
  }
  description(): string {
    return `${this.index}, ${this.data}`
  }
}

class Edge<T> {
  source: Vertex<T>
  destination: Vertex<T>
  weight?: number
  constructor(source: Vertex<T>, destination: Vertex<T>, weight?: number) {
    this.source = source
    this.destination = destination
    this.weight = weight
  }
}

class AdjecencyList<T> implements Graph<T> {
  private adjacencies: {
    [key: number]: Edge<T>[]
  }

  createVertex(data: T) {
    const vertex = new Vertex<T>(Object.keys(this.adjacencies).length, data)
    this.adjacencies[vertex.index] = []
    return vertex
  }

  addDirectedEdge(source: Vertex<T>, destination: Vertex<T>, weight?: number) {
    const edge = new Edge(source, destination, weight)
    this.adjacencies[source.index]?.push(edge)
  }

  addUndirectedEdge(source: Vertex<T>, destination: Vertex<T>, weight?: number) {
    this.addDirectedEdge(source, destination, weight)
    this.addDirectedEdge(destination, source, weight)
  }

  add(edge: EdgeType, source: Vertex<T>, destination: Vertex<T>, weight?: number) {
    switch (edge) {
      case EdgeType.directed:
        this.addDirectedEdge(source, destination, weight)
        break
      case EdgeType.undirected:
        this.addUndirectedEdge(source, destination, weight)
        break
      default:
        throw new Error()
    }
  }

  edges(source: Vertex<T>): Edge<T>[] {
    return this.adjacencies[source.index] ?? []
  }

  weight(source: Vertex<T>, destination: Vertex<T>) {
    const target = this.adjacencies[source.index as number].find((edge) => edge.destination === destination)
    return target.weight
  }

  description(): string {
    let result = ''
    for (const key in this.adjacencies) {
      const edges = this.adjacencies[key]
      let edgeString = ''
      for (let i = 0; i < edges.length; i++) {
        if (i !== edges.length - 1) {
          edgeString += `${edges[i].destination}, `
        } else {
          edgeString += `${edges[i].destination}`
        }
      }
      result += `${key} ---> [ ${edgeString} ] \n`
    }
    return result
  }
}

function main() {
  const graph = new AdjecencyList<string>()

  const singapore = graph.createVertex('Singapore')
  const tokyo = graph.createVertex('Tokyo')
  const hongKong = graph.createVertex('Hong Kong')
  const detroit = graph.createVertex('Detroit')

  graph.add(EdgeType.undirected, singapore, hongKong, 80)
  graph.add(EdgeType.undirected, singapore, tokyo, 120)
  graph.add(EdgeType.undirected, hongKong, tokyo, 100)
  graph.add(EdgeType.undirected, tokyo, detroit, 100)

  console.log(graph.description())
}

main()
