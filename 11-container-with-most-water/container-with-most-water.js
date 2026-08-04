/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left =0;
    let right = height.length-1;
    let maxWater = 0;
    while (left <right){
        let width = right -left;
        let minHeight = Math.min(height[left],height[right]);
        let area = width* minHeight;

        maxWater = Math.max(area,maxWater);
        if(height[left]<height[right]){
            left ++;
        } else{
            right --;
        }
    }
    return maxWater;
};