/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let numberOfZeros = nums.filter(ele=>ele===0).length
    let done=false
    while(!done){
        done = true
        for(let i = 1; i < nums.length;i++){
            if(nums[i - 1] === 0){
                done = false;
                [nums[i - 1] , nums[i]] = [nums[i] , nums[i - 1]]
            }
        }  
        done = nums.slice(nums.length - numberOfZeros).every(ele=>ele === 0)
    }
    
    return nums
};