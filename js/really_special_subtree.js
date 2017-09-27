// https://www.hackerrank.com/challenges/kruskalmstrsub/problem
const fileTools = require('./file.js');

class UndirectedEdge {
  constructor(node1, node2, weight) {
    this.node1 = node1;
    this.node2 = node2;
    this.weight = weight;
  }
}

class Graph {
  constructor(numVertices) {
    this.vertexMap = {};
    // vertex values are 1 indexed
    for (let i = 0; i < numVertices; i += 1) {
      this.addToSet(i + 1);
    }
  }
  // creates  a new element with an id, rank, and pointer to itself
  addToSet(value) {
    if (!(value in this.vertexMap)) {
      const vertex = {};
      vertex.parent = vertex;
      vertex.rank = 0;
      this.vertexMap[value] = vertex;
    }
  }

  // recursively finds the vertex with a pointer to itself
  // uses path compression to minimize calls
  getRoot(vertex) {
    if (vertex.parent === vertex) {
      return vertex.parent;
    }
    return this.getRoot(vertex.parent);
  }

  // uses getRoot() to determine roots of trees.
  // does nothing if the roots are the same, returns false
  // Joins the trees if the roots are different, returns true
  union(value1, value2) {
    const v1Root = this.getRoot(this.vertexMap[value1]);
    const v2Root = this.getRoot(this.vertexMap[value2]);
    if (v1Root === v2Root) {
      return false;
    }

    v1Root.parent = v2Root;
    return true;
  }
}

const parseInputAndCreateEdges = (input) => {
  const edges = [];
  input.split('\n').slice(1).forEach((str) => {
    const [src, dest, weight] = str.split(' ').map(string => parseInt(string, 10));
    edges.push(new UndirectedEdge(src, dest, weight));
  });
  return edges;
};

const parseInputAndGetVerticesCount = input => parseInt(input.split('\n')[0].split(' ')[0], 10);

// uses Kruskal's algorithm
const minSpanningTree = (input) => {
  const numVertices = parseInputAndGetVerticesCount(input);
  // sort by ascending weight
  const sortedEdges = parseInputAndCreateEdges(input).sort((a, b) => a.weight - b.weight);
  const graph = new Graph(numVertices);
  // we can break early if the total number of edges == numVertices - 1
  let totalWeight = 0;
  sortedEdges.forEach((edge) => {
    // console.log(edge, totalWeight)
    // check if vertices are disjoint
    // if they are, join them
    // if they are not (cycle), continue
    if (graph.union(edge.node1, edge.node2)) {
      totalWeight += edge.weight;
    }
  });
  return totalWeight;
};

const input = fileTools.readTextFile('./kruskalmstrsub-testcases/input/input04.txt');
console.log(minSpanningTree(input));
