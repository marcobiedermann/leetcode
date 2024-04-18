import { describe, expect, it } from 'vitest';
import backspaceCompare from '.';

describe('backspaceCompare', () => {
  it('should return check if strings are equal', () => {
    expect.assertions(4);

    expect(backspaceCompare('ab#c', 'ad#c')).toStrictEqual(true);
    expect(backspaceCompare('ab##', 'c#d#')).toStrictEqual(true);
    expect(backspaceCompare('a##c', '#a#c')).toStrictEqual(true);
    expect(backspaceCompare('a#c', '#b')).toStrictEqual(false);
  });
});
