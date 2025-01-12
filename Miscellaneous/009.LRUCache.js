// Least Recently Used (LRU) Cache

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.

// int get(int key) Return the value of the key if the key exists, otherwise return -1.

// void put(int key, int value) Update the value of the key if the key exists. 
// Otherwise, add the key-value pair to the cache. 
// If the number of keys exceeds the capacity from this operation, evict the least recently used key.

// The functions get and put must each run in O(1) average time complexity.

// capacity = 3
// insert - new 1 -> a(LRU, MRU)
// insert - new 1 -> a(LRU)    2 -> b(MRU)
// insert - new 1 -> a(LRU)    2 -> b       3 -> c(MRU)
// insert - new 2 -> b(LRU)    3 -> c       4 -> d(MRU); capacity is 3 so LRU was removed
// change - val 2 -> b(LRU)    4 -> d       3 -> e(MRU); latest change in 3 so its new MRU

class LRU {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        else {
            let val = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, val);
            return val;
        }
    }

    put(key, val) {
        if (this.get(key) === -1) { // order is maintained MRU ar tight isde and LRU at left side
            if (this.capacity === this.map.size) {
                for (const keyVal of this.map) {
                    this.map.delete(keyVal[0]);
                    break;
                }
            }
        }
        this.map.set(key, val);
        console.log("put", this.map);
    }
}


const l1 = new LRU(3);

l1.put(1, "a");
l1.put(2, "b");
l1.put(3, "c");
l1.put(4, "d");
l1.put(3, "e");
l1.get(2);