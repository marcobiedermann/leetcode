import MinStack from '.';

describe('MinStack', () => {
  it('should retrieve the minimum element', () => {
    expect.assertions(3);

    const minStack = new MinStack();

    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);

    expect(minStack.getMin()).toStrictEqual(-3);

    minStack.pop();

    expect(minStack.top()).toStrictEqual(0);
    expect(minStack.getMin()).toStrictEqual(-2);
  });
});
