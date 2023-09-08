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



function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) {
      return null;
    }
  
    // Helper function to find the minimum node in a tree
    function findMin(node: TreeNode): TreeNode {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
  
    // Search for the node to be deleted and keep track of its parent
    let parent: TreeNode | null = null;
    let current: TreeNode | null = root;
    while (current && current.val !== key) {
      parent = current;
      if (key < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  
    // If the key is not found, return the root as is
    if (!current) {
      return root;
    }
  
    // Node to be deleted has no children
    if (!current.left && !current.right) {
      if (parent) {
        if (parent.left === current) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else {
        root = null;
      }
    }
    
    // Node to be deleted has one child
    else if (!current.left || !current.right) {
      const child = current.left ? current.left : current.right;
      if (parent) {
        if (parent.left === current) {
          parent.left = child;
        } else {
          parent.right = child;
        }
      } else {
        root = child;
      }
    }
    
    // Node to be deleted has two children
    else {
      const successor = findMin(current.right);
      current.val = successor.val;
      current.right = deleteNode(current.right, successor.val);
    }
  
    return root;
  }
  
  