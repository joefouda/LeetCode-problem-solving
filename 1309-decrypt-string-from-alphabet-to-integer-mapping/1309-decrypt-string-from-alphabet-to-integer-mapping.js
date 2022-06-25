/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let dic = {a:'1',b:'2',c:'3',d:'4',e:'5',f:'6',g:'7',h:'8',i:'9',j:'10#',
              k:'11#',l:'12#',m:'13#',n:'14#',o:'15#',p:'16#',q:'17#',r:'18#',s:'19#',
              t:'20#',u:'21#',v:'22#',w:'23#',x:'24#',y:'25#',z:'26#'}
    let letters = []
    
    function devide(s){
        if(s[2] === '#'){
            let sliced = s.slice(0,3)
            letters.push(sliced)
            s = s.replace(`${sliced}`,'')
        }else {
            letters.push(s[0])
            s = s.replace(`${s[0]}`,'')
        }
        return s.length?devide(s):0
    }
    devide(s)
    
    Object.keys(dic).map(dicLetter=>{
        letters.map((ele,index)=>{
            if(ele === dic[dicLetter]){
                letters[index] = dicLetter
            }
        })
    })
    return letters.join('')
};