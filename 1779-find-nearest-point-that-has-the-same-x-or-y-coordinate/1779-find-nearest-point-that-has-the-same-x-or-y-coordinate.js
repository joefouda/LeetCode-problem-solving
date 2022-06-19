/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let validPoints = points.filter(ele=>ele[0] === x || ele[1] === y)
    if(validPoints.length === 0){
        return -1
    }
    
    let manhattenDistances = validPoints.map(ele=>{
        return {
            distance:(Math.abs(x - ele[0]) + Math.abs(y - ele[1])),
            index:points.indexOf(ele) 
        }
    })
    let smallest = manhattenDistances.sort((a,b)=>a.distance - b.distance)[0]
    return manhattenDistances.filter(ele=>ele.distance === smallest.distance).sort((a,b)=>a.index - b.index)[0].index
};