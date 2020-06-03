import ListNode from './list-node';

function deleteNode(node: ListNode): void {
  const temp = node.next;

  node.val = node.next.val;
  node.next = node.next.next;
  temp.next = null;
}

export default deleteNode;
