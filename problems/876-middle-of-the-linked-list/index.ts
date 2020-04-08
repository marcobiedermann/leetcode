class ListNode {
  val: any;

  next: ListNode | null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

function middleNode(head: ListNode): ListNode {
  let pointerA = head;
  let pointerB = head;

  while (pointerB && pointerB.next) {
    pointerA = pointerA.next;
    pointerB = pointerB.next.next;
  }

  return pointerA;
}

export default middleNode;

export { ListNode };
