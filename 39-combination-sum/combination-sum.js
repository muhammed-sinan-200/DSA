/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
     const result = [];

    function backtrack(start, current, sum) {
        // Found a valid combination
        if (sum === target) {
            result.push([...current]);
            return;
        }

        // Sum exceeded target
        if (sum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);

            backtrack(
                i,
                current,
                sum + candidates[i]
            );

            current.pop();
        }
    }

    backtrack(0, [], 0);

    return result;
};