import { describe, expect, it } from 'vitest';
import bstFromPreorder, { TreeNode } from '.';

describe('bstFromPreorder', () => {
  it('should return root node of binary search tree', () => {
    expect.assertions(1);

    const root = new TreeNode(8);

    root.left = new TreeNode(5);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(7);
    root.right = new TreeNode(10);
    root.right.right = new TreeNode(12);

    expect(bstFromPreorder([8, 5, 1, 7, 10, 12])).toStrictEqual(root);
  });
});
