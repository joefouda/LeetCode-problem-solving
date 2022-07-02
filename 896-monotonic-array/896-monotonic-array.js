/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let asc = [...nums]
    let des = [...nums]
    asc.sort((a,b)=>a-b)
    des.sort((a,b)=>b-a)
    return nums.every((ele,index)=>ele === asc[index]) || nums.every((ele,index)=>ele === des[index])
};