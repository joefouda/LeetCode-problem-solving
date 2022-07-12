/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if(s.length === 1) return false
    
    let maxSubLength = Math.floor(s.length / 2)
    let i = 1
    while(i <= maxSubLength){
        let subString = s.slice(0,i)
        let repeatTimes = Math.floor(s.length / subString.length)
        subString = subString.repeat(repeatTimes)
        if(subString === s) return true
        i++
    }
    return false
};