const { ListNode, createListFromArr } = require('./utils');

const head = createListFromArr([1,2,3,4,5,6,7,8,9]);

// console.log(head.toArr());

const deal = (head) => {
  let p1 = head, p2 = head;

  while(p2 && p2.next){
    p2 = p2.next.next;
    p1 = p1.next;
  }

  return p1.val;

}

console.log(deal(head));