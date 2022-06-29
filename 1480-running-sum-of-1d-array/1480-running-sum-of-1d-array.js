/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    sums = []
    for(let i = 0;i < nums.length;i++){
        let sum = 0
        for(let j = i;j >= 0;j--){
            sum+=nums[j]
        }
        sums.push(sum)
    }
    return sums
};