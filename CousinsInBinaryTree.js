// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.
    
    
    /**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 * };
 */
// class Solution {
// public:
//     bool isCousins(TreeNode* root, int x, int y) {
        
//     }
// };

// Magrini: We can use a BFS to find the distance between the node and the root (this will be the level) and we can also keep the ancestor of the node. With that, we can see if the distance(x) == distance(y) and the ancestor(x) != ancestor(y).

    
// BFS:
//     queue<type> q
//     a = q.first
//     loop (each children x of a):
//         q <- x
    
    
//  x = 4, y = 1
     
//      x = 1 y = 4
     
//      2     0 <-
//    /   \
//   3    10   1 
// /        \
// 4         1   2
     
//         3 10  2 
      


function isCousin(root, x, y){
      
    if(!root) return false
      let queue = []
      let current = root
      let distance = []
      let ancestry = 
      queue.push(current)
    
      while(queue.length){
          current = queue.shift()
          
          if(current.left) queue.push(current.left)
          if(current.right) queue.push(current.right)
          
      }
    
    
}

// https://leetcode.com/problems/cousins-in-binary-tree/


class Solution {
public:
    
    bool isCousins(TreeNode* root, int x, int y) {
        int num = x + y;
        queue<TreeNode*> q;
        int level_size = 0;
        map<int,int> parent;
        if(root) q.push(root); 
        else return false;
        while(!q.empty()){
            level_size = q.size();
            while(level_size --){
                TreeNode *top = q.front();
                if(top->val == x or top->val == y) num -= top->val;
                if(num == 0){
                    if(parent[x] != parent[y]) return true;
                    else return false;
                }
                q.pop();
                if(top->left){ 
                    parent[top->left->val] = top->val;
                    q.push(top->left);
                }
                if(top->right){
                    parent[top->right->val] = top->val;
                    q.push(top->right);
                }
            }
            if(num != (x + y)) return false;
        }
        return false;
    }
};


