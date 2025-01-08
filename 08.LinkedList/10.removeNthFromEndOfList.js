function removeNthFromEndOfList(head, n) {
    let dummy = new Node(0);
    dummy.next = head;

    let left = dummy;
    let right = head;

    // move right ptr to n places in the list
    while (right && n > 0) {
        right = right.next;
        n--;
    }

    // move both left and right ptr such that list is exhasuted
    while (right) {
        left = left.next;
        right = right.next;
    }

    // remove the node
    left.next = left.next.next;

    return dummy.next;
}