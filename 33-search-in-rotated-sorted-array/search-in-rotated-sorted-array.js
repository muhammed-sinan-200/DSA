/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    //lets do this
    //so..
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
                //if left sidil target undenklil mid muthal minus chyth thudangaam to find the target index
            }
            else {
                left = mid + 1;
                //allenkil mid muthal add cheyth pokaam until we find the ans
            } //this if else is for where to search for the target, left or right
        }
        else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};