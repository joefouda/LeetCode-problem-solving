/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    function calcSquare(n){
        return n.toString().split('').map(ele=>Math.pow(Number(ele),2)).reduce((total,st)=>total+st)
    }
    
    let cycle = new Set()
    while(n !==1 && !cycle.has(n)){
        cycle.add(n)
        n = calcSquare(n)
    }
    return n === 1
};