import { RefObject } from 'react';
import { RefsObject } from './destructureRefs';

export declare function destructureRefsObject<T extends {}>(refs: RefsObject<T>): T;
export declare function destructureRef<T>(ref: RefObject<T>): T;
