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
var sumOfLeftLeaves = function(root) {
    if (root === null) return 0;
    
    const queue = [root];
    let sum = 0;
    while (queue.length > 0) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            
            if (currentNode.left !== null) {
                test = currentNode.left
                if(!test.left && !test.right)sum+=test.val
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }
    
    return sum;
};