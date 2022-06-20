/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1 === s2){
        return true
    }
    let sortedS1 = s1.split('').sort()
    let sortedS2 = s2.split('').sort()
    if(sortedS1.join() === sortedS2.join()){
        let count = 0
        for(let i = 0;i < s1.length;i++){
            if(s1[i] !== s2[i]){
                count++
            }
        }
        return count === 2?true:false 
    }
    return false
};