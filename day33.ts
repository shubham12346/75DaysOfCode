// 104. Maximum Depth of Binary Tree5

// Type : Tree /DFS 



// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2


function maxDepth(root: TreeNode | null): number {
    if(root===null) return 0;
      let left = maxDepth(root.left);
      let right = maxDepth(root.right);
   
      return 1 + Math.max(left,right);
   };