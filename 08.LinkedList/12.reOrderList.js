// L0 -> L1 -> L2 -> .... -> L(n-1) -> L(n)
// to
// L0 -> L(n) -> L1 -> L(n-1) -> L2 -> L(n-2) -> ...

function reOrderList(head) {
    // find mid
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // break list
    let curr = slow.next;
    slow.next = null;

    // reverse the 2nd list
    let prev = null;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // combine lists
    let h1 = head;
    let h2 = prev;

    while (h2) {
        let temp = h1.next;
        h1.next = h2;
        h1 = h2;
        h2 = temp;
    }
}