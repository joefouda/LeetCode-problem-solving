/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const freqs = new Map();
    for (let num of nums) freqs.set(num, (freqs.get(num) || 0) + 1);
    return Array.from(freqs.values()).every(ele=>ele === 1)?false:true;
};