function scoreOfString(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length - 1; i += 1) {
    const current = s.charCodeAt(i);
    const next = s.charCodeAt(i + 1);

    result += Math.abs(current - next);
  }

  return result;
}

export default scoreOfString;
