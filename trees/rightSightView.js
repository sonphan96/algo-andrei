/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// BFS
// identify the end of the level
// add last node to result
//

const rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];

  while (queue.length) {
    let length = queue.length,
      count = 0,
      currentNode;

    while (count < length) {
      currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      count++;
    }

    result.push(currentNode.value);
  }

  return result;
};
