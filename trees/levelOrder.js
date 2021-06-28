///

const levelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    let length = queue.length,
      count = 0;
    const currentLevel = [];

    while (count < length) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }

    result.push(currentLevel);
  }
  return result;
};
