// if list is not cyclic, return null
// else return the index of nodethat the tail is pointing to

function detectCycle(head) {
    // if no head or only single node, list not cyclic
    if (!head || !head.next) return null;

    // create 2 ptrs starting from head
    let fast = head;
    let slow = head;

    let ptr = head;
    let idx = 0;

    // check if list is cyclic
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (slow === fast) break;
    }

    // if list not cyclic return null
    if (fast !== slow) return null;

    // uptil now slow is pointing to node where the cycle ends
    // till the head pointer (ptr) reaches node pointed by slow move next
    // slow will get to the node where cycle starts
    while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
        idx++;
    }

    return { indexOfNode: idx, node: slow };
}