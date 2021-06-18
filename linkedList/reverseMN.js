// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// m = 3, n = 5

const reverseBetween = function (head, m, n) {
  let currentPos = 1,
    currentNode = head,
    start = head;

  while (currentPos < m) {
    start = currentNode; // 2
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null,
    tail = currentNode; // 3

  while (currentPos >= m && currentPos <= n) {
    let nextTemp = currentNode.next; // 4
    currentNode.next = newList; // 3 -> null
    newList = currentNode; // 3 -> null
    currentNode = nextTemp; // 4
    currentPos++; // 4
  }
  start.next = newList;
  tail.next = currentNode;

  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};
