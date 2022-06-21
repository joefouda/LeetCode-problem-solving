/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let greaters = []
    nums1.map(ele=>{
        let sliced = nums2.indexOf(ele) 
        if(sliced + 1 === nums2.length){
            greaters.push(-1)
        }{
            for(let i = sliced + 1;i < nums2.length;i++){
                if(nums2[i] > ele){
                    greaters.push(nums2[i])
                    break;
                }
                if(i === nums2.length -1){
                    greaters.push(-1)
                }
            }
        }
        
    })
    
    return greaters
};