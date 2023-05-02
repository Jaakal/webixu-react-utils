import { RefObject } from 'react';

export type RefsObject<T> = {
  [K in keyof T]: RefObject<T[K]>;
};

export const destructureRefsObject = <T extends {}>(refs: RefsObject<T>): T => {
  return Object.keys(refs).reduce((destructuredRefs, key) => {
    destructuredRefs[key as keyof T] = destructureRef(refs[key as keyof T]);
    return destructuredRefs;
  }, {} as T);
};

export const destructureRef = <T>(ref: RefObject<T>): T => ref.current!;
