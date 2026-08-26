/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    if (nums.length === 1) {
        return nums[0];
    }
    let case1 = houseRobber1(
        nums.slice(0, nums.length - 1)
    )
    let case2 = houseRobber1(
        nums.slice(1)
    )

    function houseRobber1(houses) {
        let rob1 = 0;
        let rob2 = 0;

        for (let money of houses) {
            let current = Math.max(money + rob1, rob2);

            rob1 = rob2;
            rob2 = current;
        }

        return rob2;
    }

    return Math.max(case1, case2)

};