/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0
    for(let i = 0;i < mat.length;i++){
        for(let j = 0;j < mat[i].length;j++){
            if(i === j){
                sum += mat[i][j]
            }
            
        }
    }
    let reversedMat = mat.map(ele=>ele.reverse())
    for(let i = 0;i < mat.length;i++){
        for(let j = 0;j < mat[i].length;j++){
            if(i === j){
                sum += mat[i][j]
            }
        }
    }
    if(mat.length & 1){
        let base = Math.floor(mat.length/2)
        sum-=mat[base][base]
    }
    return sum
};