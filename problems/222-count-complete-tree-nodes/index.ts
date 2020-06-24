import TreeNode from './tree-node';

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let leftLevels = 1;
  let { left } = root;

  while (left) {
    left = left.left;
    leftLevels += 1;
  }

  let rightLevels = 1;
  let { right } = root;

  while (right) {
    right = right.right;
    rightLevels += 1;
  }

  if (leftLevels === rightLevels) {
    return 2 ** leftLevels - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
}

export default countNodes;
