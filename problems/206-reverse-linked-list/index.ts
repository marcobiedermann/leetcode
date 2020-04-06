class ListNode {
  val: any;

  next: ListNode | null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

function reverseList(head: ListNode): ListNode | null {
  let prev = null;

  while (head) {
    const { next } = head;

    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

export default reverseList;

export { ListNode };
