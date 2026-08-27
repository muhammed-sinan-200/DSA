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
var rob = function(root) {
     function dfs(node) {
        if (node === null) {
            return [0, 0];
        }

        let [leftRob, leftSkip] = dfs(node.left);
        let [rightRob, rightSkip] = dfs(node.right);

        let robCurrent = node.val + leftSkip + rightSkip;

        let skipCurrent =
            Math.max(leftRob, leftSkip) +
            Math.max(rightRob, rightSkip);

        return [robCurrent, skipCurrent];
    }

    let [robRoot, skipRoot] = dfs(root);

    return Math.max(robRoot, skipRoot);
};