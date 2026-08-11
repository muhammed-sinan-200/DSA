/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let a = 1;
    let b = 2;
    if (n <= 2) return n;

    for (let i = 3; i <= n; i++) {
        let current = a + b;
        a = b;
        b = current;
    }
    return b;
};