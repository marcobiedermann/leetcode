function convertToTitle(columnNumber: number): string {
  let number = columnNumber;
  let title = '';

  while (number) {
    const char = String.fromCharCode(65 + ((number - 1) % 26));
    title = char + title;
    number = Math.floor((number - 1) / 26);
  }

  return title;
}

export default convertToTitle;
