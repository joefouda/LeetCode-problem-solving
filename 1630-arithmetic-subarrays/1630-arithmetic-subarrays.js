/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
      let results = []
      for(let i = 0; i < r.length;i++){
          let subArray = nums.slice(l[i], r[i] + 1)
          if(subArray.length === 2){
              results.push(true)
              continue;
          } 
          
          subArray.sort((a, b)=> a - b)
          let diff = subArray[subArray.length - 1] - subArray[subArray.length - 2]
          for(let j = subArray.length - 2; j >= 0; j--){
              if(subArray[j + 1] - subArray[j] !== diff){
                  results.push(false)
                  break;
              } 
              if(j === 0) results.push(true)
          }
      }  
      return results
    
};