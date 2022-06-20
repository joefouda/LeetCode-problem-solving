/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    function signFunc(number){
        if (number < 0){
            return -1
        } else if(number > 0){
            return 1
        } else {
            return 0
        }  
    }
    
    return signFunc(nums.reduce((total,st)=>total*st))
};