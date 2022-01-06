class ListNode{
  constructor(val, next){
    this.val = val;
    this.next = next;
  }

  toArr(){
    let p = new ListNode('', this);
    const res = [];
    while(p = p.next){
      res.push(p.val)
    }
    return res;
  }
}

const createListFromArr = (arr = []) => {
  const head = new ListNode(1);
  arr.reduce((total, cur)=>(
    total.next = new ListNode(cur)
  ), head)
  return head.next;
};


module.exports = {
  ListNode,
  createListFromArr
}

// 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
// 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