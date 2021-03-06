/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p1 = head, p2 = head;
    while(p1 && p2 && p2.next){
      p1 = p1.next 
      p2 = p2.next.next

      if(p1 === p2){
        return true;
      }
    }
    return false;
};
// @lc code=end

