import maxDepth from '.';
import TreeNode from './tree-node';

describe('maxDepth', () => {
  it('should return maximum depth of a binary tree', () => {
    expect.assertions(1);

    const tree = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    );

    expect(maxDepth(tree)).toStrictEqual(3);
  });
});
