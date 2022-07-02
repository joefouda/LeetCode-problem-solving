/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === haystack) return 0;
    let l = needle.length;
    if (l > haystack.length) return -1;
    
    for(i = l ; i <= haystack.length; i++){
        let chunk = haystack.slice(i - l,i)
        console.log(chunk)
        if(needle === chunk) return i - l
    }
    return -1
};