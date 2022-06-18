/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0
    for(i = low;i <= high;i++){
        (i & 1) && count++;
    }
    return count
};