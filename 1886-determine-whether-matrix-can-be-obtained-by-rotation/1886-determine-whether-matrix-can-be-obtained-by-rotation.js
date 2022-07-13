/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    let temp = Array.from({length:mat.length},(ele,index)=>Array.from(mat[index]))
    
    target = target.map(ele=>JSON.stringify(ele))
    if(mat.every((ele, index)=>target[index] === JSON.stringify(ele))) return true
    
    for(let index = 0; index < 3; index++){
        for(let i = 0; i < mat.length;i++){
            for(let j = 0; j < mat[i].length;j++){
                let index = (mat.length - 1) - j
                temp[i][j] = mat[index][i] 
            }
        }
        mat = Array.from({length:temp.length},(ele,index)=>Array.from(temp[index]))
        if(mat.every((ele, index)=>target[index] === JSON.stringify(ele))) return true
        
    }
    return false    
};