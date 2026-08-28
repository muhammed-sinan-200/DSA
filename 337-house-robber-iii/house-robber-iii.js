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
var rob = function (root) {
    function travel(root) {
        if (root === null) {
            return [0, 0];
        }

        let left_node_choices = travel(root.left);
        let right_node_choices = travel(root.right);

        let options = [0, 0];

        options[0] = root.val + left_node_choices[1] + right_node_choices[1];
        options[1] = Math.max(left_node_choices[0], left_node_choices[1]) +
            Math.max(right_node_choices[0], right_node_choices[1]);

        return options;
    }
    let options = travel(root);

    return Math.max(options[0], options[1]);
};