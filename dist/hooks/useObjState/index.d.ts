export type SetState<T extends Record<string, any>> = (state: Partial<T> | null | ((prevState: T) => Partial<T>)) => void;
export declare const useObjState: <T extends Record<string, any>>(initialState: T | (() => T)) => [T, SetState<T>];
