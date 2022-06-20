/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let arr = nums.sort((a,b)=>a-b)
    for(let i = arr.length -3;i >= 0;i--){
        if(arr[i] + arr[i + 1] > arr[i + 2]){
            return arr[i] + arr[i + 1] + arr[i + 2]
        }
    }
    return 0
    
};