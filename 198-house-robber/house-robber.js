/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let rob1 = 0;
    let rob2 = 0;

    for (let money of nums){
        let current = Math.max(money + rob1, rob2);

        rob1 = rob2;
        rob2 = current;
    }

    return rob2;
};