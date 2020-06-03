import deleteNode from '.';
import ListNode from './list-node';

describe('deleteNode', () => {
  it('should remove ListNode with value 5', () => {
    expect.assertions(1);

    const listNode = new ListNode(4);

    listNode.next = new ListNode(5);
    listNode.next.next = new ListNode(1);
    listNode.next.next.next = new ListNode(9);

    deleteNode(listNode.next);

    expect(listNode).toMatchObject({ next: { next: { next: null, val: 9 }, val: 1 }, val: 4 });
  });

  it('should remove ListNode with value 1', () => {
    expect.assertions(1);

    const listNode = new ListNode(4);

    listNode.next = new ListNode(5);
    listNode.next.next = new ListNode(1);
    listNode.next.next.next = new ListNode(9);

    deleteNode(listNode.next.next);

    expect(listNode).toMatchObject({ next: { next: { next: null, val: 9 }, val: 5 }, val: 4 });
  });
});
