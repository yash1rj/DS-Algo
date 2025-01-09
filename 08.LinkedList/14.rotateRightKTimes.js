// 0 -> 1 -> 2
// 2 -> 0 -> 1 (rot 1)
// 1 -> 2 -> 0 (rot 2)

function rotateRightKTimes(head, k) {
    if (head === null) return head;

    let len = 1;
    let tail = head;

    while (tail.next !== null) {
        tail = tail.next;
        len++;
    } // get length of linked list

    tail.next = head; // circular linked list

    let count = len - (k % len);

    while (count > 0) {
        head = head.next;
        tail = tail.next;
        count--;
    } // move head and tail as per count got by rotate times

    tail.next = null;

    return head;
}