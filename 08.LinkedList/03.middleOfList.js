function middleOfList(head) {
    // create 2 ptrs starting from head
    let slow = head;
    let fast = head;

    // move fast ptr twice ahead to reach end of list
    // till that time slow ptr reaches the middle
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}