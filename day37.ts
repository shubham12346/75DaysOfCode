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

function longestZigZag(root: TreeNode | null): number {
    if (!root) return 0;
 
   let maxZigZag = 0;
 
   function dfs(node: TreeNode | null, isRight: boolean, currentZigZag: number): void {
     if (!node) return;
 
     maxZigZag = Math.max(maxZigZag, currentZigZag);
 
     if (isRight) {
       dfs(node.left, false, currentZigZag + 1);
       dfs(node.right, true, 1); // Reset to 1 when moving right.
     } else {
       dfs(node.left, false, 1); // Reset to 1 when moving left.
       dfs(node.right, true, currentZigZag + 1);
     }
   }
 
   dfs(root, false, 0); // Start with the root node and initial direction is left (false).
 
   return maxZigZag;
 };