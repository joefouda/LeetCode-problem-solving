/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    while(true){
        let total = 0
        let max = target.sort((a,b)=>b-a)[0]
        let index = target.indexOf(max)
        if(max === 1) return true
        target.map((ele,i)=>{
            if(index !== i){
                total+=ele
            }
        })
        if(total === 1) return true
        if(max <= total || total === 0) return false
        max = max%total
        if(max < 1) return false
        target[index]=max;
    }
};