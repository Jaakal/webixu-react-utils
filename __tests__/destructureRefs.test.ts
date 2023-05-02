import { RefObject } from 'react';
import { destructureRef, destructureRefsObject } from '../src';

describe('destructureRef', () => {
  it("returns the value of the ref's current property", () => {
    const value = 'hello';
    const ref: RefObject<string> = { current: value };
    expect(destructureRef(ref)).toBe(value);
  });

  it('throws an error if the ref is undefined', () => {
    const ref: RefObject<string> = undefined!;
    expect(() => destructureRef(ref)).toThrowError(TypeError);
  });
});

describe('destructureRefsObject', () => {
  it('returns an object with the same keys as the input object', () => {
    const input = { foo: { current: 1 }, bar: { current: 2 } };
    const output = destructureRefsObject(input);
    expect(Object.keys(output)).toEqual(Object.keys(input));
  });

  it("returns an object with the same values as the refs' current properties", () => {
    const input = { foo: { current: 1 }, bar: { current: 2 } };
    const output = destructureRefsObject(input);
    expect(output).toEqual({ foo: 1, bar: 2 });
  });
});
