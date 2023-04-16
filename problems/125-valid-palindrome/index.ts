function isPalindrome(s: string): boolean {
  const sanitized = s.toLowerCase().replace(/[^a-z\d]/g, '');

  for (let i = 0; i < sanitized.length / 2; i += 1) {
    const start = sanitized[i];
    const end = sanitized[sanitized.length - 1 - i];

    if (start !== end) {
      return false;
    }
  }

  return true;
}

export default isPalindrome;
