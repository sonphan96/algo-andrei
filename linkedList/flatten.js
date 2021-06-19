// 1 -> 2 -> 3 -> 4 -> 5 -> null
//      6 -> 7 -> 8 ->null
//           9 -> 10 -> null

const flatten = function (head) {
  if (!head) return head;

  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = currentNode.next;

      if (tail.next !== null) {
        tail.next.prev = tail;
      }
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;

      currentNode.child = null;
    }
  }
  return head;
};

// space: O(1)
// time: O(n)
