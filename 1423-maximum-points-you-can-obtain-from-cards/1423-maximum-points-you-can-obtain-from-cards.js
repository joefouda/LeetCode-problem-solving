/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let sum = cardPoints.reduce((total,st)=>total+st)
    if(k === cardPoints.length)return sum
    
    let prefixSum = 0
    let len = cardPoints.length
    for(let i = 0;i < len - k;i++){
        prefixSum += cardPoints[i]
    }
    max = sum - prefixSum
    for(let i = 0;i < k;i++){
        prefixSum = prefixSum - cardPoints[i] + cardPoints[i + len - k]
        max = Math.max(max, sum - prefixSum)
    }
    
    
    return max
};