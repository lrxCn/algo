/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const findNthFromEnd = function(head, n){
  let p1 = head, p2 = head;

  for(let i = 0; i < n; i++){
    p1 = p1.next;
  }

  while(p1){
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;

}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(-1, head);

  const prev = findNthFromEnd(dummy, n+1);
  prev.next = prev.next.next;
  return dummy.next;
};
// @lc code=end

