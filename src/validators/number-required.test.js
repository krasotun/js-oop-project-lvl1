import { beforeEach, describe, expect, it } from 'vitest';
import { numberRequiredValidator } from './number-required';

describe('#numberRequired', () => {
  let num;

  beforeEach(() => {
    num = 10;
  });

  it('should return false if value not a number', () => {
    num = 'num';
    expect(numberRequiredValidator(num)).toBe(false);
  });

  it('should return false on null', () => {
    num = null;
    expect(numberRequiredValidator(num)).toBe(false);
  });

  it('should return false on undefined', () => {
    num = undefined;
    expect(numberRequiredValidator(num)).toBe(false);
  });

  it('should return true if number', () => {
    expect(numberRequiredValidator(num)).toBe(true);
  });
});
