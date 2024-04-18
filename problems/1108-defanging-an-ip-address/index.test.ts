import { describe, expect, it } from 'vitest';
import defangIPaddr from '.';

describe('defangIPaddr', () => {
  it('should defang IP address', () => {
    expect.assertions(2);

    expect(defangIPaddr('1.1.1.1')).toStrictEqual('1[.]1[.]1[.]1');
    expect(defangIPaddr('255.100.50.0')).toStrictEqual('255[.]100[.]50[.]0');
  });
});
