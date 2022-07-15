/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let spiralArr = []

    while(matrix.length){
        spiralArr = spiralArr.concat(matrix.shift())
        
        for(let i = 0; i < matrix.length - 1;i++){
            spiralArr.push(matrix[i][matrix[i].length - 1])
            matrix[i].pop()
        }
        matrix = matrix.filter(ele=>ele.length !== 0)
        
        if(matrix.length === 0) break;
        spiralArr = spiralArr.concat(matrix.pop().reverse())
        
        for(let i = matrix.length - 1; i > 0;i--){
            spiralArr.push(matrix[i][0])
            matrix[i].shift()
        }
        matrix = matrix.filter(ele=>ele.length !== 0)
    }
    return spiralArr
};