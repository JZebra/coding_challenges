// https://leetcode.com/problems/clone-graph/description/

// not sure how to do this without an ugly global
let visited = {};

const clone = (node) => {
  if (node === null) {
    return null;
  }

  if (node.label in visited) {
    return visited[node.label];
  }

  // UndirectedGraphNode is defined in the question
  const nodeClone = new UndirectedGraphNode(node.label);
  visited[node.label] = nodeClone;
  node.neighbors.forEach(neighbor => nodeClone.neighbors.push(clone(neighbor)));
  return nodeClone;
};

const cloneGraph = (node) => {
  visited = {};
  return clone(node);
};
