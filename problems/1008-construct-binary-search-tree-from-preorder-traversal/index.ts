class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function bstFromPreorder(preorder: number[]): TreeNode {
  const { length } = preorder;
  const root = new TreeNode(preorder[0]);
  const stack = [root];

  for (let i = 1; i < length; i += 1) {
    const newNode = new TreeNode(preorder[i]);

    if (newNode.val < stack[stack.length - 1].val) {
      stack[stack.length - 1].left = newNode;
    } else {
      let parent = null;

      while (stack.length && newNode.val > stack[stack.length - 1].val) {
        parent = stack.pop();
      }

      parent.right = newNode;
    }

    stack.push(newNode);
  }

  return root;
}

export default bstFromPreorder;

export { TreeNode };
