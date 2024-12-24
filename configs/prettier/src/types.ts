import type { Config as PrettierConfig, Options as PrettierOptions } from 'prettier';

type TPrettierOptions = PrettierOptions;
type Awaitable<T> = Promise<T> | T;

interface IOverrideBase {
    excludeFiles?: string | string[];
    files: string | string[];
}

type TOverride<T> = {
    options?: Partial<T> & TPrettierOptions;
} & IOverrideBase;

type TResolvedPrettierConfig<T = Record<string, unknown>> = {
    overrides?: TOverride<T>[];
} & Omit<PrettierConfig, 'overrides'> &
    Partial<T> &
    TPrettierOptions;

type TUserPrettierOptions<T = Record<string, unknown>> = {
    overrides?: TOverride<T>[];
    plugins?: {
        multilinearrays: PrettierOptions['plugins'];
    };
} & Partial<T> &
    TPrettierOptions;

export type { Awaitable, IOverrideBase, TOverride, TPrettierOptions, TResolvedPrettierConfig, TUserPrettierOptions };
