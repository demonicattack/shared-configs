import type { Config as PrettierConfig, Options as PrettierOptions } from 'prettier';

type TPrettierOptions = PrettierOptions;

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
    Partial<T>;

type TUserPrettierOptions<T = Record<string, unknown>> = {
    overrides?: TOverride<T>[];
    plugins?: PrettierOptions['plugins'];
} & Partial<T> &
    PrettierOptions;

export type { IOverrideBase, TOverride, TPrettierOptions, TResolvedPrettierConfig, TUserPrettierOptions };
