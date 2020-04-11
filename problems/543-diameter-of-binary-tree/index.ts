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

function height(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(height(root.left), height(root.right));
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const lheight = height(root.left);
  const rheight = height(root.right);

  const ldiameter = diameterOfBinaryTree(root.left);
  const rdiameter = diameterOfBinaryTree(root.right);

  const diameter = Math.max(lheight + rheight, Math.max(ldiameter, rdiameter));

  return diameter;
}

export default diameterOfBinaryTree;

export { TreeNode };
