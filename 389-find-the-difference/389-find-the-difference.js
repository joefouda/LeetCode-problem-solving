/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sortedS = s.split('').sort()
    let sortedT = t.split('').sort()
    for(i = 0;i < sortedT.length;i++){
        if(sortedS[i] !== sortedT[i]){
            return sortedT[i]
        }
    }
};