/* eslint-disable */ 
class Vertex {
    constructor(value) {
      this.value = value;
    }
  }
  
  class Edge {
    constructor(vertex, weight = 0) {
      this.vertex = vertex;
      this.weight = weight;
    }
  }
  
  class Graph {
    constructor() {
      this._adjacencyList = new Map();
      this.size=0;
    }
    addVertex(vertex) {
      // we need to add the vertex to the adjacency list and set an empty array for the edges
      this._adjacencyList.set(vertex, []);
    }
    addDirectedEdge(startVertex, endVertex,weight =0) {
      if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
        throw new Error('Invalid vertex');
      }
      const adjacencies = this._adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex,weight));
    }
    getNodes() {
        let nodes=[]
      for (const [vertex, edge] of this._adjacencyList.entries()) {

        nodes.push(vertex)
      }
    //   console.log(nodes)
      return nodes

    }

    getNeighbour(vertex) {
        return this._adjacencyList.get(vertex)
    }

    getSize()
    {
return this._adjacencyList.size
    }
  }

  const graph = new Graph();
const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const four = new Vertex(4);
const five = new Vertex(4);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(four);
graph.addVertex(five);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(two, six);
graph.addDirectedEdge(two, four);
graph.addDirectedEdge(six, four);

graph.getNodes();
console.log(graph.getNeighbour(two));
console.log(graph.getSize());
module.exports = {
    Vertex,
    Edge,
    Graph
  };