"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const edgeType_1 = require("./edgeType");
class Vertex {
    constructor(value) {
        this.adjacents = [];
        this.value = value;
        this.adjacents = [];
    }
    addAdjacent(vertex) {
        this.adjacents.push(vertex);
    }
    removeAdjacent(vertex) {
        const index = this.adjacents.indexOf(vertex);
        if (index > -1) {
            this.adjacents.splice(index, 1);
            return vertex;
        }
    }
    getAdjacents() {
        return this.adjacents;
    }
    isAdjacent(vertex) {
        return this.adjacents.indexOf(vertex) > -1;
    }
}
class Graph {
    constructor(edgeType = edgeType_1.EdgeType.directed) {
        this.vertexes = new Map();
        this.edgeType = edgeType;
    }
    addEdge(source, destination) {
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);
        sourceNode.addAdjacent(destinationNode);
        if (this.edgeType === edgeType_1.EdgeType.undirected) {
            destinationNode.addAdjacent(sourceNode);
        }
        return [sourceNode, destinationNode];
    }
    addVertex(value) {
        if (this.vertexes.has(value)) {
            return this.vertexes.get(value);
        }
        else {
            const vertex = new Vertex(value);
            this.vertexes.set(value, vertex);
            return vertex;
        }
    }
    removeVertex(value) {
        const current = this.vertexes.get(value);
        if (current) {
            for (const node of this.vertexes.values()) {
                node.removeAdjacent(current);
            }
        }
        return this.vertexes.delete(value);
    }
    removeEdge(source, destination) {
        const sourceNode = this.vertexes.get(source);
        const destinationNode = this.vertexes.get(destination);
        if (sourceNode && destinationNode) {
            sourceNode.removeAdjacent(destinationNode);
            if (this.edgeType === edgeType_1.EdgeType.undirected) {
                destinationNode.removeAdjacent(sourceNode);
            }
        }
        return [sourceNode, destinationNode];
    }
}
//# sourceMappingURL=graph.js.map