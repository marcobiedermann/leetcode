import { describe, expect, it } from 'vitest';
import scoreOfString from '.';

describe('scoreOfString', () => {
  it('should return the score of the given string', () => {
    expect(scoreOfString('hello')).toBe(13);
    expect(scoreOfString('zaz')).toBe(50);
  });
});
