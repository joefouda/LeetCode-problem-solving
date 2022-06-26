/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let binaries = []
    while(head.next){
        binaries.push(head.val)
        head = head.next
    }
    binaries.push(head.val)
    let decimal = 0
    let power = binaries.length - 1
    for(let i = 0;i<binaries.length;i++){
        if(binaries[i])decimal += Math.pow(2,power)
        power--
    }
    return decimal
};