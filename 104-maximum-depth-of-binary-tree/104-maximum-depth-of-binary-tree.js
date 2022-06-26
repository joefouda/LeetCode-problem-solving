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
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;
    
    const queue = [root];
    let minDepth = 0;
    while (queue.length > 0) {
        let levelSize = queue.length;
        minDepth++;
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }
    
    return minDepth;
};