import isValidSequence, { TreeNode } from '.';

describe('isValidSequence', () => {
  it('should check if a string is a valid sequence from root to leaves path in a binary tree', () => {
    expect.assertions(3);

    const root = new TreeNode(
      0,
      new TreeNode(
        1,
        new TreeNode(0, null, new TreeNode(1)),
        new TreeNode(1, new TreeNode(0), new TreeNode(0)),
      ),
      new TreeNode(0, new TreeNode(0)),
    );

    expect(isValidSequence(root, [0, 1, 0, 1])).toStrictEqual(true);
    expect(isValidSequence(root, [0, 0, 1])).toStrictEqual(false);
    expect(isValidSequence(root, [0, 1, 1])).toStrictEqual(false);
  });
});
