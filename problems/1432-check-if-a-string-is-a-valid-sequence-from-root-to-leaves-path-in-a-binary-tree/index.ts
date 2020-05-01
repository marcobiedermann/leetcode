class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function checkPath(root: TreeNode | null, arr: number[], length: number, i = 0): boolean {
  if (!root) {
    return length === 0;
  }

  if (i === length - 1 && !root.left && !root.right && root.val === arr[i]) {
    return true;
  }

  if (i < length && root.val === arr[i]) {
    return checkPath(root.left, arr, length, i + 1) || checkPath(root.right, arr, length, i + 1);
  }

  return false;
}

function isValidSequence(root: TreeNode, arr: number[]): boolean {
  const { length } = arr;

  return checkPath(root, arr, length);
}

export default isValidSequence;

export { TreeNode };
