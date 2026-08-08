/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length;
    let outcome = n * (n + 1) / 2;
    let sum = 0;

    for (num of nums) {
        sum += num;
    }
    return outcome - sum;
};
