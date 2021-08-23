/* eslint-disable */ 

const Graph = require('../index');

describe('Graphs', () => {

  it('add vertex to th graph', () => {
    let graph = new Graph.Graph();
    const num = new Graph.Vertex(5);
    graph.addVertex(num);

    expect(graph.getSize()).toEqual(1)


  })

  it('An edge can be successfully added to the graph', () => {
    let graph = new Graph.Graph();
    const num = new Graph.Vertex(5);
    graph.addVertex(num);

    
    const num2= new Graph.Vertex(6);
    graph.addVertex(num2);
    graph.addDirectedEdge(num, num2);

expect(graph.getNeighbour(num)[0].vertex.value).toEqual(6)
  })

  it('A collection of all nodes can be properly retrieved from the graph  ', () => {
    let graph = new Graph.Graph();
    const num = new Graph.Vertex(5);
    graph.addVertex(num);

    
    const num2= new Graph.Vertex(6);
    graph.addVertex(num2);

    console.log(graph.getNodes()[0].value);
    //[ Vertex { value: 5 }, Vertex { value: 6 } ]
    expect(graph.getNodes()[0].value).toEqual(5)
    expect(graph.getNodes()[1].value).toEqual(6)

  })
  

  it('All appropriate neighbors can be retrieved from the graph ', () => {
    let graph = new Graph.Graph();
    const num = new Graph.Vertex(5);
    graph.addVertex(num);

    
    const num2= new Graph.Vertex(6);
    graph.addVertex(num2);
    graph.addDirectedEdge(num, num2);

expect(graph.getNeighbour(num)[0].vertex.value).toEqual(6)


  })

  it('The proper size is returned, representing the number of nodes in the graph  ', () => {
    let graph = new Graph.Graph();
    const num = new Graph.Vertex(5);
    graph.addVertex(num);

    
    const num2= new Graph.Vertex(6);
    graph.addVertex(num2);

    expect(graph.getSize()).toEqual(2)


  })

  it('An empty graph properly returns null', () => {
    let graph = new Graph.Graph();
    expect(graph.getNodes()).toEqual([])

    expect(graph.getSize()).toEqual(0)


  })
})

