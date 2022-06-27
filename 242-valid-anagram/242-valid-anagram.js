/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let firstSTR = Array.from(new Set(s.split('')))
    let secondSTR = Array.from(new Set(t.split('')))
    let obj1 = {}
    let obj2 = {}
    for(let i = 0; i < firstSTR.length;i++) obj1[firstSTR[i]] = s.split('').filter(ele=>ele === firstSTR[i]).length
    for(let i = 0; i < secondSTR.length;i++) obj2[secondSTR[i]] = t.split('').filter(ele=>ele === secondSTR[i]).length
    let keys = Object.keys(obj1)
    for(let i = 0; i < keys.length;i++){
        if(obj1[keys[i]] !== obj2[keys[i]]) return false
    }
    return true
};