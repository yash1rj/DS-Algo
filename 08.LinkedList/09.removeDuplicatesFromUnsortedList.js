function removeDuplicatesFromUnsortedList(head) {
    let clone = head;

    // keep frequency to check for duplicates
    let freqMap = {};
    while (clone) {
        freqMap[clone.val] = (freqMap[clone.val] || 0) + 1;
    }

    let prev = new Node(-1);
    prev.next = head;
    clone = prev;

    // skip the node which has freq > 1
    while (clone) {
        if (clone.next && freqMap[clone.next.val] > 1) clone.next = clone.next.next;
        else clone = clone.next;
    }

    return prev.next;
}