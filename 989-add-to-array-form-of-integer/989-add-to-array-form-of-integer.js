/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    num = BigInt(num.map(ele=>ele.toString()).join(''))
    let res = (num + BigInt(k)).toString().split('')
    res = res.map(ele=>Number(ele))
    return res
    
};