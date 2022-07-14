/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    if(nums.length === 1) return [-1]
    
    let greaters = []
    for(let i = 0; i < nums.length; i++){
        let curr = nums[i]
        let index = (i === nums.length - 1)?0:i + 1
        while(index !== i){
            if(nums[index] > curr) {
                greaters.push(nums[index])
                break;
            }
            if(index === nums.length - 1){
                index = 0
                if(index === i) greaters.push(-1)
                continue;
            } 
            index++
            if(index === i) greaters.push(-1)
        }
    }
    return greaters
};