"use strict";
exports.__esModule = true;
var edgeType_1 = require("./edgeType");
var Vertex = /** @class */ (function () {
    function Vertex(index, data) {
        this.index = index;
        this.data = data;
    }
    Vertex.prototype.description = function () {
        return "".concat(this.index, ", ").concat(this.data);
    };
    return Vertex;
}());
var Edge = /** @class */ (function () {
    function Edge(source, destination, weight) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
    return Edge;
}());
var AdjecencyList = /** @class */ (function () {
    function AdjecencyList() {
    }
    AdjecencyList.prototype.createVertex = function (data) {
        var vertex = new Vertex(Object.keys(this.adjacencies).length, data);
        this.adjacencies[vertex.index] = [];
        return vertex;
    };
    AdjecencyList.prototype.addDirectedEdge = function (source, destination, weight) {
        var _a;
        var edge = new Edge(source, destination, weight);
        (_a = this.adjacencies[source.index]) === null || _a === void 0 ? void 0 : _a.push(edge);
    };
    AdjecencyList.prototype.addUndirectedEdge = function (source, destination, weight) {
        this.addDirectedEdge(source, destination, weight);
        this.addDirectedEdge(destination, source, weight);
    };
    AdjecencyList.prototype.add = function (edge, source, destination, weight) {
        switch (edge) {
            case edgeType_1.EdgeType.directed:
                this.addDirectedEdge(source, destination, weight);
                break;
            case edgeType_1.EdgeType.undirected:
                this.addUndirectedEdge(source, destination, weight);
                break;
            default:
                throw new Error();
        }
    };
    AdjecencyList.prototype.edges = function (source) {
        var _a;
        return (_a = this.adjacencies[source.index]) !== null && _a !== void 0 ? _a : [];
    };
    AdjecencyList.prototype.weight = function (source, destination) {
        var target = this.adjacencies[source.index].find(function (edge) { return edge.destination === destination; });
        return target.weight;
    };
    AdjecencyList.prototype.description = function () {
        var result = '';
        for (var key in this.adjacencies) {
            var edges = this.adjacencies[key];
            var edgeString = '';
            for (var i = 0; i < edges.length; i++) {
                if (i !== edges.length - 1) {
                    edgeString += "".concat(edges[i].destination, ", ");
                }
                else {
                    edgeString += "".concat(edges[i].destination);
                }
            }
            result += "".concat(key, " ---> [ ").concat(edgeString, " ] \n");
        }
        return result;
    };
    return AdjecencyList;
}());
function main() {
    var graph = new AdjecencyList();
    var singapore = graph.createVertex('Singapore');
    var tokyo = graph.createVertex('Tokyo');
    var hongKong = graph.createVertex('Hong Kong');
    var detroit = graph.createVertex('Detroit');
    graph.add(edgeType_1.EdgeType.undirected, singapore, hongKong, 80);
    graph.add(edgeType_1.EdgeType.undirected, singapore, tokyo, 120);
    graph.add(edgeType_1.EdgeType.undirected, hongKong, tokyo, 100);
    graph.add(edgeType_1.EdgeType.undirected, tokyo, detroit, 100);
    console.log(graph.description());
}
main();
