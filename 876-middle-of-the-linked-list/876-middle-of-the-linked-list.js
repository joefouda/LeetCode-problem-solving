/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    length = 0 
    let test = head
    while(test){
        test = test.next
        length++
    }
    let middleNodeStart = Math.floor(length / 2)
    for(let i = 0;i < middleNodeStart;i++){
        head = head.next
    }
    return head
};