/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distances = points.map((ele,index)=>{
        let operation = Math.pow(Math.abs(ele[0]),2) + Math.pow(Math.abs(ele[1]),2)
        return {index, distance:Math.sqrt((operation))}
    })
    distances.sort((a, b)=> a.distance - b.distance)
    let result = []
    for(let i = 0; i < k;i++){
        result.push(points[distances[i].index])
    }
    return result
};