function isListPalindrome(head) {
    function reverseList(root) {
        let prev = null;

        while (root) {
            let ref = root.next;
            root.next = prev;
            prev = root;
            root = ref;
        }

        return prev;
    }

    let fast = head;
    let slow = head;

    // get to middle of linked list
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    fast = head; // starting from head
    slow = reverseList(slow); // reverse list from middle

    // keep comparing nodes from starting and end(reversed from middle)
    while (slow) {
        if (fast.val !== slow.val) return false;
        slow = slow.next;
        fast = fast.next;
    }

    return true;
}