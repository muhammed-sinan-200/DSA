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
var deleteDuplicates = function(head) {
    let seen  = new Set();
    let current = head;
    let prev = null;

    while(current !==null){
        if(seen.has(current.val)){
            prev.next= current.next;
        } else{
            seen.add(current.val);
            prev = current;
        }
        current = current.next;
    }
    return head;
};