// 2 -> 4 -> 3 and
// 5 -> 6 -> 4 will result in
// 7 -> 0 -> 8
//      |----| carry over

function addTwoNums(l1, l2) {
    let list = new Node(0);
    let head = list;

    let sum = 0;
    let carry = 0;

    while (l1 !== null || l2 !== null || sum !== 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        // handle carry over
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }

        // put some of one sum and move ahead
        head.next = new Node(sum);
        head = head.next;
        // set carry as initial of sum and then reset carry
        sum = carry;
        carry = 0;
    }

    return list.next;
}