class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----

const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// ---- Generate our linked list ----

const printList = head => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

// --------- Our solution -----------
// 1 -> 2 -> 3 -> 4 -> 5 -> null
// 1 -> null

const reverseLinkedList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextTemp = current.next; // 2
    current.next = prev;
    prev = current; // 1 -> null
    current = nextTemp;
  }

  return prev;
};
