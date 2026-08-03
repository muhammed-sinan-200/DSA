/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {

                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;

            } else if (sum < 0) {

                left++;

            } else {

                right--;
            }
        }
    }

    return result;
};


/*
1. Sort the array.
2. Fix one element using a loop.
3. Place two pointers:
   - left = i + 1
   - right = last index
4. Calculate the sum of nums[i] + nums[left] + nums[right].
5. If sum == 0:
   - Store the triplet.
   - Skip duplicate left and right values.
   - Move both pointers.
6. If sum < 0:
   - Move left pointer (increase the sum).
7. If sum > 0:
   - Move right pointer (decrease the sum).
8. Repeat until left >= right.
9. Return the result.

TC: O(n2)
SC: O(1) (excluding the output array)
*/