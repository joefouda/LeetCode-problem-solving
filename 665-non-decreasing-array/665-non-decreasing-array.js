/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let test = [...nums]
    let test1 = [...nums]
    for(let i = 1;i < nums.length;i++){
        if(nums[i] < nums[i-1]){
            test[i - 1] = test[i]
            test1[i] = test1[i - 1]
            break;
        }
    }
    let flag1 = true
    let flag2 = true
    for(let i = 1;i < nums.length;i++){
        if(test[i] < test[i-1]){
            flag1 = false
        }
        if(test1[i] < test1[i-1]){
            flag2 = false
        }
    }
    return flag1 || flag2
};