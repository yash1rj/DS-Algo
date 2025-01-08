// Criteria : only modify node pointers, no value

function swapAdjacentNodes(head) {
    let dummy = new Node(-1);
    dummy.next = head;
    let prev = dummy;

    while (head && head.next) {
        let p1 = head;
        let p2 = head.next;

        // swap nodes
        prev.next = p2;
        p1.next = p2.next;
        p2.next = p1;

        // for next iteration
        prev = p1;
        head = p1.next;
    }

    return dummy.next;
}