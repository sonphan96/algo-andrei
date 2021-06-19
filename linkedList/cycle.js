//

const findCycle = function (head) {
  let currentNode = head;
  const seenNodes = new Set();

  while (!seenNodes.has(currentNode)) {
    if (currentNode.next === null) {
      return false;
    }

    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }

  return currentNode;
};

// time: O(n)
// space: O(n)

// Floyd tortoise and hare
const findCycle = function (head) {
  let hare = head,
    tortoise = head;

  while (true) {
    hare = hare.next;
    tortoise = tortoise.next;

    if (hare === null || hare.next === null) {
      return false;
    } else {
      hare = hare.next;
    }

    if (tortoise === hare) {
      break;
    }
  }
  let p1 = head,
    p2 = tortoise;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};

// Time: O (n)
// Space: o (1)
