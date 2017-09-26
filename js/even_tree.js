// https://www.hackerrank.com/challenges/even-tree
const parseInputAndGenerateTree = (input, rootNode) => {
  input.split('\n').slice(1).forEach((str) => {
    const [childValue, parentValue] = str.split(' ');
    // this method traverses the whole tree and looks for a node with value === parentValue
    const parentNode = rootNode.getNode(parentValue);
    parentNode.addChild(childValue);
  });
  return rootNode;
};

class Node {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  // DFS through children and return a node with the value param
  getNode(value) {
    let stack = [this];
    const seenValues = {};
    while (stack.length > 0) {
      const current = stack.pop();
      stack = stack.concat(current.children);
      if (current.value === value) {
        return current;
      }
      seenValues[current.value] = true;
    }
    return null;
  }

  addChild(value) {
    this.children.push(new Node(value, []));
  }

  getSize() {
    return this.children.reduce((acc, child) => acc + child.getSize(), 1);
  }
}

const evenTree = (input) => {
  // create a tree and reference the root
  const rootNode = new Node('1', []);
  const tree = parseInputAndGenerateTree(input, rootNode);
  let stack = [tree];
  let count = 0;
  // dfs through the tree, assign a point value to each node
  // every node with an even count can be cut from its parent
  while (stack.length > 0) {
    const current = stack.pop();
    stack = stack.concat(current.children);
    // we can break the conditional into a hasSubtree() function on Node
    if (current.getSize() % 2 === 0) {
      count += 1;
    }
  }
  // reduce the count by one for the rootNode, which is always even
  return count - 1;
};

const fileTools = require('./file.js');

const input = fileTools.readTextFile('./even-tree-testcases/input/input00.txt');
console.log(evenTree(input));
