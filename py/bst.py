# Implement a binary tree and traverse it in order.
# part 1
# input: list of node values
# output: BST

class Node:
    def init(self, val):
        self.value = val
        self.left = None
        self.right = None


class BST:
    def init(self, node_values):
        current_node = None
        nodes_queue = []
        nodes_queue_idx = 0
        for val in node_values:
            new_node = Node(val)

            if not self.root:
                self.root = new_node
                current_node = self.root
                nodes_queue.append(new_node)
                continue

            if not current_node.left:
                current_node.left = Node(val)
                nodes_queue.append(new_node)
                continue

            if not current_node.right:
                current_node.right = Node(val)
                nodes_queue.append(new_node)
                continue

            # move to next node in nodes_queue
            nodes_queue_idx += 1
            current_node = nodes_queue[nodes_queue_idx]


# part 2
# input: root node of a tree
# output: list of node values
