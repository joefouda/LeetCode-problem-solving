/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sums = []
    let oddLengths = []
    for(let i = 1;i <= arr.length;i++){
        if(i & 1) oddLengths.push(i)
    }
    oddLengths.map(ele=>{
        let count = 0
        for(let i = 0;i < arr.length;i++){
            sums.push(arr.slice(i,i+ele).reduce((total,st)=>total+st))
            if(count + ele === arr.length){
                break;
            }
            count++
        }
    })
    return sums.reduce((total,st)=>total+st)
};