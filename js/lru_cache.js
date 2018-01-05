// https://leetcode.com/problems/lru-cache/description/

const LinkedList = require('./linked_list.js').LinkedList;
/**
 * @param {number} capacity
 * Uses a hashMap for constant time get, uses a linked list for
 * constant time puts and a fixed capacity.
 * list tracks lru items by removing oldest node when it is at capacity
 * when we remove a node, we check the node.key, this is the key in the hashmap
 * use this key to delete k,v from hashmap
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.list = new LinkedList();
    this.map = new Map();
    this.length = 0;
  }

  /**
   * @param {ListNode} node to refresh
   * @return {void}
   * moves a key to the front of the linked list
   */
  refresh(node) {
    this.list.delete(node);
    this.list.prepend(node);
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const node = this.map.get(key);
    if (node) {
      this.refresh(node);
      return node.value;
    }

    return -1;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    const node = this.map.get(key);
    if (node) {
      this.refresh(node);
      if (node.value !== value) {
        node.value = value;
      }
    } else {
      const newNode = this.list.prependValue(value);
      newNode.key = key;
      // cache not at capacity, add to cache
      if (this.length < this.capacity) {
        this.map.set(key, newNode);
        this.length += 1;
      // cache at capacity, evict oldest node and add newNode
      } else {
        const oldNode = this.list.pop();
        this.map.delete(oldNode.key);
        this.map.set(key, newNode);
      }
    }
  }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// const cache = new LRUCache(2);
// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1));       // returns 1
// cache.put(3, 3);    // evicts key 2
// console.log(cache.get(2));       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// console.log(cache.get(1));       // returns -1 (not found)
// console.log(cache.get(3));       // returns 3
// console.log(cache.get(4));       // returns 4

// testing with case from leetcode
const cache = new LRUCache(10);
const fns = ["put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"]
const params = [[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]

for (var i = 0; i < fns.length; i++) {
  cache[fns[i]].call(cache, params[i][0], params[i][1]);
}
