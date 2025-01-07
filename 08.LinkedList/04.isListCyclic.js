function isListCyclic(head) {
    if (!head) return false;

    // create 2 ptrs starting from head
    let fast = head;
    let slow = head;

    // move fast ptr twice of slow
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        // if list is cyclic, slow and fast ptr will reach at same node
        if (slow === fast) return true;
    }

    return false;
}