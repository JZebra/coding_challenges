// https://www.hackerrank.com/challenges/even-tree
const evenTree = input => {
    // create a tree and reference the root
    const rootNode = new Node('1', [])
    const tree = parseInputAndGenerateTree(input, rootNode)
    // dfs through the tree, assign a point value to each node
    let stack = [tree];
    let count = 0
    // every node with an even count can be cut from its parent
    while (stack.length > 0) {
        let current = stack.pop()
        stack = stack.concat(current.children)
        // we can break the conditional into a hasSubtree() function on Node
        if (current.getSize() % 2 === 0) {
            count++
        }
    }
    // reduce the count by one for the rootNode, which is always even
    return count - 1
}

const parseInputAndGenerateTree = (input, rootNode) => {
    input.split('\n').slice(1).forEach((str) => {
        let [childValue, parentValue] = str.split(' ')
        // this method traverses the whole tree and looks for a node with value === parentValue
        let parentNode = rootNode.getNode(parentValue)
        parentNode.addChild(childValue)
    })
    return rootNode
}

class Node {
    constructor(value, children) {
        this.value = value;
        this.children = children;
    }
    // DFS through children and return a node with the value param
    getNode(value) {
        let stack = [this]
        let seenValues = {}
        while (stack.length > 0) {
            let current = stack.pop()
            stack = stack.concat(current.children)
            if (current.value == value) {
                return current
            } else {
                seenValues[current.value] = true
            }
        }
        return null
    }

    addChild(value) {
        this.children.push(new Node(value, []));
    }

    getSize() {
        return this.children.reduce((acc, child) => { return acc + child.getSize() }, 1);
    }
}

// sample input from problem
let input = '10 9\n2 1\n3 1\n4 3\n5 2\n6 1\n7 2\n8 6\n9 8\n10 8'
console.log(evenTree(input))
