import { describe, expect, it } from 'vitest';
import countNodes from '.';
import TreeNode from './tree-node';

describe('countNodes', () => {
  it('should count nodes in complete tree', () => {
    expect.assertions(1);

    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6)),
    );

    expect(countNodes(root)).toStrictEqual(6);
  });
});
