/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length-1, carry = 1;
    while(i>=0){
        let init = digits[i] + carry;
        digits[i] = init%10;
        carry = init/10 >= 1 ? 1:0;
        i--;
    }
    if(carry!==0) digits.unshift(1);
    return digits;
}