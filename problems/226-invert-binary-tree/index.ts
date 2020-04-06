class TreeNode {
  val: any;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val: any) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function invertTree(root: TreeNode): TreeNode {
  if (!root) {
    return root;
  }

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
}

export default invertTree;
export { TreeNode };
