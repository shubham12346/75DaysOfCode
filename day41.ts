/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function searchBSTApproach1(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  if (!root) return null;
  let ansNode: TreeNode;
  let queue: TreeNode[] = [root];
  let flag: boolean = true;

  while (queue.length && flag) {
    let baseLength = queue.length;
    for (let index = 0; index < baseLength; index++) {
      const node: TreeNode | null = queue.shift();
      if (node.val === val) {
        ansNode = node;
        flag = false;
        break;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (!flag) {
      return ansNode;
    }
  }

  return null;
}

function searchBSTApproach2(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  while (root != null && root.val != val) {
    root = val < root.val ? root.left : root.right;
  }
  return root;
}
