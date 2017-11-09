// https://leetcode.com/problems/implement-trie-prefix-tree/description/

/**
 * Initialize your data structure here.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.isWord = false;
    this.prefixes = 0;
    this.children = {};
  }

  // todo: write setter functions for children and isWord
}

class Trie {
  constructor() {
    this.root = new Node('');
  }


  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    const insertHelper = (node, str) => {
      if (str.length === 0) {
        node.isWord = true;
        return null;
      }

      // create node if none exists
      if (!node.children[str[0]]) {
        const newNode = new Node(str[0]);
        node.children[str[0]] = newNode;
      }

      // recurse down
      insertHelper(node.children[str[0]], str.slice(1));
    };
    insertHelper(this.root, word);
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const searchHelper = (node, str) => {
      if (node.isWord && str.length === 0) {
        return true;
      }

      if (node.children[str[0]]) {
        return searchHelper(node.children[str[0]], str.slice(1));
      }

      return false;
    };
    return searchHelper(this.root, word);
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const prefixHelper = (node, str) => {
      if (str.length === 0) {
        return true;
      }

      if (node.children[str[0]]) {
        return prefixHelper(node.children[str[0]], str.slice(1));
      }

      // str[0] is not in children
      return false;
    };
    return prefixHelper(this.root, prefix);
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();
trie.insert('ab');
console.log(trie.search('a')); // false
console.log(trie.search('ab'));  // true
console.log(trie.startsWith('a')); // true
console.log(trie.startsWith('ab')); // true
trie.insert('a');
console.log(trie.search('a')); // true
