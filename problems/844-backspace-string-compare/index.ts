function buildStack(s: string): string {
  const { length } = s;
  const stack: string[] = [];

  for (let i = 0; i < length; i += 1) {
    if (s[i] !== '#') {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.join('');
}

function backspaceCompare(s: string, t: string): boolean {
  return buildStack(s) === buildStack(t);
}

export default backspaceCompare;
