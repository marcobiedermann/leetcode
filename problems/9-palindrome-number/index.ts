function reverseInt(number: number, result = 0): number {
  if (number <= 0) {
    return result;
  }

  const rest = number % 10;
  const newResult = result * 10 + rest;
  const newNumber = Math.floor(number / 10);

  return reverseInt(newNumber, newResult);
}

function isPalindrome(x: number): boolean {
  return x === reverseInt(x);
}

export default isPalindrome;
