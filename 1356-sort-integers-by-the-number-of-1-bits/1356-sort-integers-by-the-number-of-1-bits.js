/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    arr.sort((a,b)=>a-b)
    let binaries = arr.map(ele=>(ele >>> 0).toString(2))
    binaries.sort((a,b)=>{
        let aCount = a.split('').filter(ele=>ele === '1').length
        let bCount = b.split('').filter(ele=>ele === '1').length
        return aCount - bCount
    })
    return binaries.map(ele=>parseInt(ele, 2))
};