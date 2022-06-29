/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(i = 0;i < nums.length;i++){
        let firstSum = i?nums.slice(0,i).reduce((total,st)=>total+st):0
        let secondSum = (i+1) < nums.length?nums.slice(i+1,nums.length).reduce((total,st)=>total+st):0
        if(firstSum === secondSum){
            return i
        }
    }
    return -1
};