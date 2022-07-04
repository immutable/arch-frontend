import { getLogger, getLogLevel, setLogLevel } from './logger';

export * from './browser';
export * from './date';
export * from './logger';
export * from './number';
export * from './object';
export * from './parser';
export * from './storage';
export * from './string';
export * from './token';
export * from './wallet';
export * from './starknet';
export * from './ethereum';


export const promiseHandler = async (promise: any) => {
    try {
        return [await promise, null];
    } catch (err) {
        return [null, err];
    }
};
